import { createClient } from "@sanity/client";
const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "",
  dataset: process.env.REACT_APP_SANITY_DATASET || "",
  useCdn: false,
  apiVersion: "2024-9-9",
});
export default sanityClient;
