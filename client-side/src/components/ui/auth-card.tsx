import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-[480px] mx-4 bg-[#fafafa] border border-[#e8e8e8] rounded-[24px] px-10 py-12 flex flex-col items-center">
      {children}
    </div>
  );
}
