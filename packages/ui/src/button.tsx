"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={() => alert(`Hello from your app!`)}
    >
      {children}
    </button>
  );
};
