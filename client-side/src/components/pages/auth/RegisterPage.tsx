"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthInput } from "@/components/ui/auth-input";
import { AuthButton } from "@/components/ui/auth-button";
import Link from "next/link";
import { registerUser } from "@/services/auth/auth.apis";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  role: "Admin" | "User";
}

export function RegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: { role: "User" },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setServerError(null);
    setServerSuccess(null);
    try {
      const result = await registerUser(data);
      if (result?.success) {
        setServerSuccess("Account created! Redirecting to login...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setServerError(result?.message || "Registration failed. Please try again.");
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">
        Create your Account
      </h1>
      <p className="text-sm text-gray-400 mb-8">
        Join QC Exclusive and start your journey
      </p>

      {serverError && (
        <div className="w-full mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
          {serverError}
        </div>
      )}
      {serverSuccess && (
        <div className="w-full mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded-[10px] text-sm text-[#00A651] font-medium">
          {serverSuccess}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Your full name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" },
          })}
          error={errors.name?.message}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          })}
          error={errors.password?.message}
        />

        <AuthInput
          label="Contact Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          {...register("contactNo", {
            required: "Contact number is required",
          })}
          error={errors.contactNo?.message}
        />

        {/* Role Selector */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Role
          </label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm text-gray-700 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors appearance-none"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
          )}
        </div>

        <div className="w-full flex justify-end mb-4">
          <Link
            href="/login"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Already have an account? Sign in
          </Link>
        </div>

        <AuthButton type="submit" isLoading={isSubmitting}>
          Create Account
        </AuthButton>
      </form>
    </AuthCard>
  );
}
