import 'dotenv/config';

import bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';

import {
  PrismaClient,
  User,
} from '../generated/prisma';

// Validate DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in .env file');
}

// Prisma 7 adapter setup
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Prisma client
const prisma = new PrismaClient({
  adapter,
});

// Password hashing configuration
const BCRYPT_SALT_ROUNDS = 12;

interface SeedAdminConfig {
  email: string;
  password: string;
  name: string;
  contactNo: string;
}

const DEFAULT_ADMIN_CONFIG: SeedAdminConfig = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || '12345678',
  name: process.env.ADMIN_NAME || 'System Administrator',
  contactNo: process.env.ADMIN_CONTACT_NO || '+1234567890',
};

/**
 * Create default admin user
 */
async function createDefaultAdmin(): Promise<User | null> {
  try {
    console.log('🔍 Checking for existing admin user...');

    const existingAdmin = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: DEFAULT_ADMIN_CONFIG.email,
          },
          {
            role: 'Admin',
          },
        ],
      },
    });

    if (existingAdmin) {
      console.log('✅ Admin already exists');
      console.log(`Email: ${existingAdmin.email}`);
      return existingAdmin;
    }

    console.log('⚙️ Creating default admin user...');

    const hashedPassword = await bcrypt.hash(
      DEFAULT_ADMIN_CONFIG.password,
      BCRYPT_SALT_ROUNDS,
    );

    const admin = await prisma.user.create({
      data: {
        email: DEFAULT_ADMIN_CONFIG.email,
        password: hashedPassword,
        name: DEFAULT_ADMIN_CONFIG.name,
        contactNo: DEFAULT_ADMIN_CONFIG.contactNo,
        role: 'Admin',
        isBlocked: false,
      },
    });

    console.log('🎉 Admin created successfully');
    console.log('────────────────────────');
    console.log(`Email: ${admin.email}`);
    console.log(`Password: ${DEFAULT_ADMIN_CONFIG.password}`);
    console.log(`Role: ${admin.role}`);
    console.log('────────────────────────');

    return admin;
  } catch (error: any) {
    if (
      error.code === 'P2002' &&
      error.meta?.target?.includes('email')
    ) {
      console.log('✅ Admin already exists with this email');

      const existingAdmin = await prisma.user.findUnique({
        where: {
          email: DEFAULT_ADMIN_CONFIG.email,
        },
      });

      return existingAdmin;
    }

    console.error('❌ Failed to create admin:', error);

    throw error;
  }
}

/**
 * Main seed runner
 */
async function main() {
  console.log('🚀 Starting database seed...');
  console.log('');

  try {
    await createDefaultAdmin();

    console.log('');
    console.log('✅ Database seed completed successfully');
  } catch (error) {
    console.error('❌ Database seed failed:', error);

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Execute seed
main();