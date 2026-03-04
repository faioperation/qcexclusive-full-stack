"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { AuthButton } from "@/components/ui/auth-button";

export function PasswordSuccessPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/login");
  };

  return (
    <AuthCard>
      <div className="py-4">
        <Logo />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-1 text-center leading-tight">
        Password Updated
        <br />
        Successfully!
      </h1>
      <p className="text-sm text-gray-400 mb-8 text-center leading-relaxed">
        Create a new password. Ensure it differs from
        <br />
        previous ones for security
      </p>

      <div className="w-full">
        <AuthButton type="button" onClick={handleContinue}>
          Continue
        </AuthButton>
      </div>
    </AuthCard>
  );
}
