import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AuthButton() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button asChild variant="ghost" className="rounded-full">
        <Link href="/register">sign up</Link>
      </Button>
      <Button asChild className="rounded-full text-gray-900 font-medium">
        <Link href="/login">Log in</Link>
      </Button>
    </div>
  );
}
