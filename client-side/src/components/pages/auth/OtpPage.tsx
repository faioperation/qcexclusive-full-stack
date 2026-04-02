"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/ui/auth-card";
import { Logo } from "@/components/ui/logo";
import { OtpInput } from "@/components/ui/otp-input";
import { AuthButton } from "@/components/ui/auth-button";
import { verifyOtp } from "@/services/auth/auth.apis";

export function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length < 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const email = sessionStorage.getItem("reset_email") || "";
      const result = await verifyOtp({ email, otp });
      if (result?.success) {
        router.push("/set-password");
      } else {
        setError(result?.message || "Invalid verification code. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthCard>
      <Logo />

      <h1 className="text-xl font-bold text-gray-800 mt-6 mb-1">OTP</h1>
      <p className="text-sm text-gray-400 mb-8 text-center leading-relaxed">
        We sent a code to your email address. Please check
        <br />
        your email for the 6 digit code.
      </p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <OtpInput
            length={6}
            value={otp}
            onChange={(val) => {
              setOtp(val);
              if (error) setError("");
            }}
            error={error}
          />
        </div>

        <AuthButton type="submit" isLoading={isSubmitting}>
          Continue
        </AuthButton>
      </form>
    </AuthCard>
  );
}
