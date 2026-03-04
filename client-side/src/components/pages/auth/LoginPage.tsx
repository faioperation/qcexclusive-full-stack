"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthInput } from "@/components/ui/auth-input";
import { AuthButton } from "@/components/ui/auth-button";
import Link from "next/link";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);
    // TODO: API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/");
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">
        Login your Profile
      </h1>
      <p className="text-sm text-gray-400 mb-8">Start with new journey</p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Email"
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
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />

        <div className="w-full flex justify-end mb-4">
          <Link
            href="/forgot-password"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <AuthButton type="submit" isLoading={isSubmitting}>
          Continue
        </AuthButton>
      </form>
    </AuthCard>
  );
}
