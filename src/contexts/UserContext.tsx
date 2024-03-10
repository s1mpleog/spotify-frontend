"use client";

import * as userService from "@/services/user.service";
import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

type UserContext = {
  user: IUser | undefined;
  isLoggedIn: boolean;
};

interface userContextProviderProps {
  children: React.ReactNode;
}

const userContext = createContext<UserContext | undefined>(undefined);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
  const { data: userData, error: userError } = useQuery({
    queryKey: ["user"],
    queryFn: userService.getCurrentUser,
    refetchOnReconnect: true,
    refetchOnMount: true,
  });

  const [user, setUser] = useState<IUser | undefined>(userData);

  useEffect(() => {
    if (!userError) {
      setUser(userData);
    }
  }, [userData, userError, user]);

  const { error: tokenError } = useQuery({
    queryKey: ["update-token"],
    queryFn: userService.updateToken,
    enabled: !userError,
    staleTime: 15 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });

  const isLoggedIn = !userError && !tokenError;

  return (
    <userContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext);
  return context as UserContext;
};
