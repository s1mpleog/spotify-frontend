"use client";
import * as userService from "@/services/user.service";
import React from "react";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ILogoutButtonProps {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
}

export default function LogoutButton({
  variant,
  className,
}: ILogoutButtonProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["logout-user"],
    mutationFn: userService.logoutUser,

    onSuccess: async () => {
      toast.success("Logout success");
      router.refresh();
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  return (
    <Button
      variant={variant}
      className={cn("font-medium rounded-full", className)}
      onClick={handleSubmit}
    >
      Logout
    </Button>
  );
}
