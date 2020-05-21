import sanityClient from "@sanity/client";
import { getConfig } from "./config";

const client = sanityClient({
  projectId: "p3ezynln",
  dataset: "development",
  useCdn: true
});

console.log("using dataset development");

export default client;
