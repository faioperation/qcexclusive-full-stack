import React from "react";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? 36 : 28;
  const textClass =
    size === "large" ? "text-3xl" : "text-2xl";

  return (
    <div className="flex items-center justify-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0L16.8 10.2L14 7.5L11.2 10.2L14 0Z"
          fill="#00A651"
        />
        <path
          d="M14 28L11.2 17.8L14 20.5L16.8 17.8L14 28Z"
          fill="#00A651"
        />
        <path
          d="M0 14L10.2 11.2L7.5 14L10.2 16.8L0 14Z"
          fill="#00A651"
        />
        <path
          d="M28 14L17.8 16.8L20.5 14L17.8 11.2L28 14Z"
          fill="#00A651"
        />
      </svg>
      <span className={`${textClass} font-bold text-gray-800`}>LoGo</span>
    </div>
  );
}
