#!/bin/sh
set -e

echo "================================================="
echo "  QC Exclusive Backend — Startup"
echo "================================================="
echo "Environment : ${NODE_ENV:-production}"
echo "Database    : ${DATABASE_URL:0:40}..."
echo ""

# ── Wait for PostgreSQL ───────────────────────────────────────────────────────
echo "[Entrypoint] Waiting for PostgreSQL to be ready..."
MAX_TRIES=30
COUNT=0
until node -e "
  const { Client } = require('pg');
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  c.connect().then(() => { c.end(); process.exit(0); }).catch(() => process.exit(1));
" 2>/dev/null; do
  COUNT=$((COUNT+1))
  if [ "$COUNT" -ge "$MAX_TRIES" ]; then
    echo "[Entrypoint] ERROR: PostgreSQL did not become ready in time. Exiting."
    exit 1
  fi
  echo "[Entrypoint] PostgreSQL not ready yet (attempt $COUNT/$MAX_TRIES). Retrying in 3s..."
  sleep 3
done
echo "[Entrypoint] PostgreSQL is ready."

# ── Run Prisma Migrations ─────────────────────────────────────────────────────
echo "[Entrypoint] Running Prisma migrations..."
node_modules/.bin/prisma migrate deploy
echo "[Entrypoint] Migrations complete."

# ── Optional: Seed Database ───────────────────────────────────────────────────
if [ "${RUN_SEED:-false}" = "true" ]; then
  echo "[Entrypoint] Running database seed..."
  node_modules/.bin/ts-node prisma/seed.ts || node dist/prisma/seed.js || true
  echo "[Entrypoint] Seed complete."
fi

echo "[Entrypoint] Starting server..."
exec "$@"
