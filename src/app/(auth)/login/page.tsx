import LoginForm from "@/components/form/LoginForm";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Log in - Spotify",
};

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
