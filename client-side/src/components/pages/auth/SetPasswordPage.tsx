"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthInput } from "@/components/ui/auth-input";
import { AuthButton } from "@/components/ui/auth-button";

interface SetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

export function SetPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SetPasswordFormValues>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: SetPasswordFormValues) => {
    console.log("Set password data:", data);
    // TODO: API call to set new password
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/password-success");
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">
        Set Password
      </h1>
      <p className="text-sm text-gray-400 mb-8">Start with new journey</p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <AuthInput
          label="New Password"
          type="password"
          placeholder="••••••"
          {...register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.newPassword?.message}
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="••••••"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
          error={errors.confirmPassword?.message}
        />

        <AuthButton type="submit" isLoading={isSubmitting}>
          Continue
        </AuthButton>
      </form>
    </AuthCard>
  );
}
