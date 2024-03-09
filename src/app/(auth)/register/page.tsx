import RegisterForm from "@/components/form/RegisterForm";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign up - Spotify",
};

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
