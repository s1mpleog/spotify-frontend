import axios from "axios";
import { ILoginUser, IRegisterUser, IUser } from "@/types/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const createUser = async (data: IRegisterUser) => {
  try {
    const response = await axios.postForm(
      `${BACKEND_URL}/users/register`,
      data,
      {
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status < 300) {
      console.log("User created successfully");
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message);
  }
};

export const loginUser = async (data: ILoginUser) => {
  const response = await fetch(`${BACKEND_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const logoutUser = async () => {
  const response = await fetch(`${BACKEND_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const getCurrentUser = async () => {
  const response = await fetch(`${BACKEND_URL}/users/me`, {
    method: "GET",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody as IUser;
};

export const getUserById = async (id: string) => {
  const response = await fetch(`${BACKEND_URL}/users/profile${id}`, {
    method: "GET",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody as IUser;
};

export const updateToken = async () => {
  const response = await fetch(`${BACKEND_URL}/users/update`, {
    method: "GET",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};
