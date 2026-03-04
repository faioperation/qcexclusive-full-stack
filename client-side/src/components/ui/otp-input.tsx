"use client";

import React, { useRef, useCallback } from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function OtpInput({ length = 6, value, onChange, error }: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;

      if (!/^\d*$/.test(val)) return;

      const char = val.slice(-1);
      const newValue = value.split("");

      while (newValue.length < length) {
        newValue.push("");
      }

      newValue[index] = char;
      const joined = newValue.join("").slice(0, length);
      onChange(joined);

      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [value, length, onChange]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (!value[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newValue = value.split("");
          newValue[index - 1] = "";
          onChange(newValue.join(""));
        } else {
          const newValue = value.split("");
          newValue[index] = "";
          onChange(newValue.join(""));
        }
      }
      if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [value, length, onChange]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
      onChange(pasteData);
      const nextIndex = Math.min(pasteData.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    },
    [length, onChange]
  );

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-[50px] h-[50px] text-center text-lg font-semibold bg-white border ${
              error
                ? "border-red-400"
                : value[index]
                ? "border-[#00A651]"
                : "border-[#d0d0d0]"
            } rounded-[10px] outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-500 text-center">{error}</p>
      )}
    </div>
  );
}
