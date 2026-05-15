
# Database Seeding Guide

This guide explains how to seed your PostgreSQL database with a default admin user.

## Prerequisites

1. PostgreSQL database running and accessible
2. Database connection configured in `.env`
3. Prisma dependencies installed (`npm install`)

## Configuration

First, set up your admin credentials in the `.env` file (see `.env.example` for reference):

```env
# Default Admin User (for database seeding)
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="Admin123@"
ADMIN_NAME="System Administrator"
ADMIN_CONTACT_NO="+1234567890"
```

## Available Scripts

The following scripts are available in `package.json`:

| Script | Description |
|--------|-------------|
| `npm run db:migrate` | Run migrations and sync the database |
| `npm run db:seed` | Seed the database with default data |
| `npm run db:studio` | Open Prisma Studio to view and edit data |
| `npm run db:generate` | Regenerate Prisma Client |

## Step-by-Step Guide

### 1. Make sure your database is up to date

First, run the migrations to ensure your database schema is current:

```bash
npm run db:migrate
```

### 2. Run the seed

Now, seed the database with the default admin user:

```bash
npm run db:seed
```

### 3. Verify the admin was created

You can verify the admin user was created using Prisma Studio:

```bash
npm run db:studio
```

## Features

- **Idempotent**: Safe to run multiple times - won't create duplicate admins
- **Environment-based**: Configure admin via environment variables
- **Secure**: Passwords hashed with bcrypt (cost factor 12)
- **Error handling**: Proper error handling and logging
- **Backward compatible**: Works with existing database

## Default Admin Credentials

If you don't configure custom credentials in `.env`, these defaults will be used:

- **Email**: `admin@example.com`
- **Password**: `Admin123@`
- **Name**: `System Administrator`
- **Role**: Admin

**⚠️ IMPORTANT: Change the default password immediately after first login!**

## Troubleshooting

### Prisma Client not found

If you get an error about missing Prisma Client, run:

```bash
npm run db:generate
```

### Database connection issues

Check your `DATABASE_URL` in `.env` and make sure PostgreSQL is running.

### Admin already exists

The seed script is safe to run multiple times - it will detect existing admins and skip creation.

