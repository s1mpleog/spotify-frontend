"use client";
import * as userService from "@/services/user.service";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ILoginUser } from "@/types/types";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { register, watch, handleSubmit, reset } = useForm<ILoginUser>();
  const inputClass =
    "py-2 px-4 outline-none border bg-transparent rounded-md flex-1 w-full";

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: userService.loginUser,

    onSuccess: async () => {
      toast.success("Login Success");
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/");
      router.refresh();
      reset();
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <section className="flex flex-col bg-base shadow-md rounded-md px-14 py-20 max-w-6xl mx-auto items-start space-y-6 justify-center">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Log in to Spotify
        </h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col flex-1 w-full items-start justify-start space-y-4"
      >
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          {...register("email", { required: "Email is required" })}
          className={inputClass}
          type="email"
          placeholder="Email"
        />
        <Label htmlFor="password">Password</Label>
        <input
          id="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
          })}
          className={inputClass}
          type="password"
          placeholder="Password"
        />
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <input
          id="confirmPassword"
          {...register("password", {
            validate: (val) => {
              if (!val) {
                return "This Field is required";
              } else if (watch("password") !== val) {
                return "Your password does not match";
              }
            },
          })}
          className={inputClass}
          type="password"
          placeholder="Confirm Password"
        />
        <Button
          disabled={isPending}
          type="submit"
          className="w-full rounded-full text-lg font-medium"
          size="lg"
        >
          Sign up
        </Button>
      </form>
      <div className="flex items-center justify-center gap-2">
        <p>Don&apos;t have an account? </p>
        <Link
          className="underline hover:text-primary transition-all duration-200"
          href="/register"
        >
          Sign up for spotify
        </Link>
      </div>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </section>
  );
}
