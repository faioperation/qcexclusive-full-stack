"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthInput } from "@/components/ui/auth-input";
import { AuthButton } from "@/components/ui/auth-button";
import Link from "next/link";
import { userLogin } from "@/services/auth/auth.apis";
import { useUser } from "@/context/UserContext";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginPage() {
  const router = useRouter();
  const { refetchUser } = useUser();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    try {
      const result = await userLogin(data);
      if (result?.success) {
        await refetchUser();
        router.push("/");
        router.refresh();
      } else {
        setServerError(result?.message || "Invalid credentials. Please try again.");
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">
        Login your Profile
      </h1>
      <p className="text-sm text-gray-400 mb-8">Start with new journey</p>

      {serverError && (
        <div className="w-full mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
          {serverError}
        </div>
      )}

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

        <div className="w-full flex justify-end items-center mb-4">
          {/* <Link
            href="/register"
            className="text-sm text-[#00A651] hover:underline font-medium transition-colors"
          >
            Create account
          </Link> */}
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
