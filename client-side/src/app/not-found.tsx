"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#f5f5f5] p-6 text-center shadow-inner">
      <div className="flex flex-col items-center max-w-md bg-white p-12 rounded-[24px] border border-[#e8e8e8] shadow-sm">
        <h1 className="text-[120px] font-black text-[#00A651] leading-none mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-[280px] mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col w-full gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full h-[50px] bg-[#00A651] hover:bg-[#009345] text-white text-base font-semibold rounded-[12px] transition-colors"
          >
            <Home size={18} />
            Back to Dashboard
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 w-full h-[50px] bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-base font-semibold rounded-[12px] transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back Previous
          </button>
        </div>
      </div>
    </div>
  );
}
