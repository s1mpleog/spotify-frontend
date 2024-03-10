import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useInvalidate = (queryKey: any) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });

    return () => {
      queryClient.invalidateQueries(queryKey);
    };
  }, [queryClient, queryKey]);
};

export default useInvalidate;
