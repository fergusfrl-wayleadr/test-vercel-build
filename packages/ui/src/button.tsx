"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => alert(`Hello from your app!`)}
    >
      {children}
    </button>
  );
};
