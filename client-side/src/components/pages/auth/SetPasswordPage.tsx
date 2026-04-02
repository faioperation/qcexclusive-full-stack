"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthInput } from "@/components/ui/auth-input";
import { AuthButton } from "@/components/ui/auth-button";
import { changePassword } from "@/services/auth/auth.apis";

interface SetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

export function SetPasswordPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<SetPasswordFormValues>();

  const onSubmit = async (data: SetPasswordFormValues) => {
    setServerError(null);
    try {
      const email = sessionStorage.getItem("reset_email") || "";
      const result = await changePassword({ email, newPassword: data.newPassword });
      if (result?.success) {
        sessionStorage.removeItem("reset_email");
        router.push("/password-success");
      } else {
        setServerError(result?.message || "Failed to update password. Please try again.");
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">
        Set Password
      </h1>
      <p className="text-sm text-gray-400 mb-8">Start with new journey</p>

      {serverError && (
        <div className="w-full mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
          {serverError}
        </div>
      )}

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
              value === getValues("newPassword") || "Passwords do not match",
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
