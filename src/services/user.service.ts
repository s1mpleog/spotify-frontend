import axios from "axios";
import { IRegisterUser } from "@/types/types";

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

    if (!response.data.ok) {
      throw new Error(response.data.message);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
