"use server";

import { jwtDecode } from "jwt-decode";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import { IUser } from "./auth.types";

// ─── Register ─────────────────────────────────────────────────────────────────

/**
 * POST /auth/register
 * Register a new user (Admin or User role).
 * Body: { name, email, password, contactNo, role }
 */
export const registerUser = async (payload: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("user", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Login ────────────────────────────────────────────────────────────────────

/**
 * POST /auth/login
 * Authenticate a user and store access/refresh tokens in cookies.
 * Body: { email, password }
 */
export const userLogin = async (payload: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
      (await cookies()).set("refreshToken", result?.data?.refreshToken);
    }
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Logout ───────────────────────────────────────────────────────────────────

/**
 * POST /auth/logout
 * Logs out the current user and clears auth cookies.
 */
export const logoutUser = async () => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await cookies()).get("accessToken")?.value ?? ""}`,
      },
    });
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Forgot Password — Step 1: Send OTP ──────────────────────────────────────

/**
 * POST /auth/forgot-password
 * Sends a 6-digit OTP to the provided email address.
 * Body: { email }
 */
export const forgotPassword = async (payload: { email: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Forgot Password — Step 2: Verify OTP ────────────────────────────────────

/**
 * POST /auth/verify-otp
 * Verifies the OTP sent to the user's email.
 * Body: { email, otp }
 */
export const verifyOtp = async (payload: { email: string; otp: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/auth/verify-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Forgot Password — Step 3: Change Password ───────────────────────────────

/**
 * POST /auth/change-password
 * Sets a new password after OTP verification.
 * Body: { email, newPassword }
 */
export const changePassword = async (payload: {
  email: string;
  newPassword: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/auth/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get Current User (from JWT) ─────────────────────────────────────────────

/**
 * Decodes the accessToken cookie to return the currently logged-in user.
 * No network call — reads from the JWT payload directly.
 */
export const getCurrentUser = async (): Promise<IUser | null> => {
  try {
    const token = (await cookies()).get("accessToken")?.value;
    if (!token) return null;
    const decoded = jwtDecode<IUser>(token);
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};
