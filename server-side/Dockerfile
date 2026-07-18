# ─── Stage 1: Dependency Installation ─────────────────────────────────────────
FROM node:20-alpine AS deps

# Install OS-level dependencies required by native modules (bcrypt, pg)
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy only lock files first for better layer caching
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies needed for build/generate)
RUN npm ci

# ─── Stage 2: Prisma Client Generation ────────────────────────────────────────
FROM node:20-alpine AS prisma-generate

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
COPY prisma.config.ts ./
COPY tsconfig.json ./
COPY prisma ./prisma

# Generate the Prisma client to /app/generated/prisma
RUN node_modules/.bin/prisma generate

# ─── Stage 3: TypeScript Build ────────────────────────────────────────────────
FROM node:20-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=prisma-generate /app/generated ./generated
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript to JavaScript
RUN node_modules/.bin/tsc

# ─── Stage 4: Production Image ────────────────────────────────────────────────
FROM node:20-alpine AS production

# Security: run as non-root
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

WORKDIR /app

# Install only production deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled JS from builder
COPY --from=builder /app/dist ./dist

# Copy Prisma schema files (needed for migrations at startup)
COPY prisma ./prisma
COPY prisma.config.ts ./

# Copy generated Prisma client
COPY --from=prisma-generate /app/generated ./generated

# Copy EJS email templates (referenced by smtp.service.ts at runtime)
COPY src/app/utils/templates ./dist/app/utils/templates

# Copy entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Set ownership
RUN chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 5000

# Health check: hit the root endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:5000/ || exit 1

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["node", "dist/server.js"]
