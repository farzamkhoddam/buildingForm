import { useQuery } from "@tanstack/react-query";
import  sanityClient  from "../SanityClient";

export const useSanityQuery = (query: string, variables = {}) => {
  const fooquery = `*[_type == "form"]`;
  return useQuery({
    queryKey: ["sanity", query],
    queryFn: async () => {
      console.log("Farzam sanityclient ===", sanityClient);
      const data = await sanityClient.fetch(fooquery);
      return data;
    },
  });
};
