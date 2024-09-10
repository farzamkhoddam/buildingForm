import { createClient } from "@sanity/client";
const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "",
  dataset: process.env.REACT_APP_SANITY_DATASET || "",
  token: process.env.REACT_APP_SANITY_TOKEN || "",
  useCdn: false,
  apiVersion: `2024-09-09`,
});
export default sanityClient;
