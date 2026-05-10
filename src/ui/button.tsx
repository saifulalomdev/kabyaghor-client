import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  variant?: "icon" | "default";
};

export default function Button({
  children,
  active = false,
  variant = "icon",
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        transition-all duration-300
        focus:outline-none
        active:scale-95
        cursor-pointer
        ${
          variant === "icon"
            ? "size-12 rounded-full flex items-center justify-center"
            : "px-4 py-2 rounded-xl w-full flex justify-center items-center gap-3 border"
        }

        ${
          active
            ? "bg-surface text-text"
            : "text-muted hover:text-text"
        }

        ${className}
      `}
    >
      {children}
    </button>
  );
}