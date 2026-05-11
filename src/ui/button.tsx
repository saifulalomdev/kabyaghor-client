import React from "react";

type Variant = "default" | "primary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  variant?: Variant;
  size?: Size;
};

const baseStyles =
  "transition-all duration-300 focus:outline-none active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center";

const variants: Record<Variant, string> = {
  default:
    "bg-surface text-text border border-border",

  primary:
    "bg-primary text-text hover:opacity-90",

  ghost:
    "text-muted hover:text-text hover:bg-surface",

  icon:
    "text-muted hover:text-text hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-2",
  md: "h-11 px-4 text-base gap-3",
  lg: "h-13 px-6 text-lg gap-3",
};

const iconSizes: Record<Size, string> = {
  sm: "size-9",
  md: "size-11",
  lg: "size-13",
};

export default function Button({
  children,
  active = false,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={[
        baseStyles,

        variants[variant],

        variant === "icon"
          ? iconSizes[size]
          : `${sizes[size]} w-full`,

        active && "ring-2 ring-primary text-text",
        "rounded-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}