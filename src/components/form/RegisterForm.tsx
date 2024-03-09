"use client";
import * as userService from "@/services/user.service";
import { IRegisterUser } from "@/types/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [image, setImage] = useState<File | undefined>(undefined);
  const { register, watch, handleSubmit, reset } = useForm<IRegisterUser>();
  const inputClass =
    "py-2 px-4 outline-none border bg-transparent rounded-md flex-1 w-full";

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: userService.createUser,

    onSuccess: () => {
      toast.success("User registered successfully");
      router.push("/");
      reset();
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    const newData = {
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      avatar: image,
    };
    console.log(image);
    mutate(newData);
  });

  return (
    <section className="flex flex-col w-full items-start space-y-6 justify-center">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Sign up to <br /> start listening
        </h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col flex-1 w-full items-start justify-start space-y-4"
      >
        <div className="w-full flex flex-col space-y-2">
          <Label htmlFor="avatar" className="text-gray-500 font-bold">
            Choose an avatar
          </Label>
          <Input
            {...register("avatar")}
            onChange={handleFile}
            id="avatar"
            type="file"
            accept="image/*"
            className="py-2 bg-transparent"
          />
        </div>
        <Label htmlFor="username">Username</Label>
        <input
          id="username"
          {...register("username", { required: "Username is required" })}
          className={inputClass}
          type="text"
          placeholder="Username"
        />
        <Label htmlFor="fullName">Full Name</Label>
        <input
          id="fullName"
          {...register("fullName", { required: "FullName is required" })}
          className={inputClass}
          type="text"
          placeholder="Full Name"
        />
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
        <p>Already have an account? </p>
        <Link className="underline" href="/login">
          Log in here
        </Link>
      </div>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </section>
  );
}
