import sanityClient from "@sanity/client";
import { getConfig } from "./config";

const client = sanityClient({
  projectId: "p3ezynln",
  dataset: getConfig().sanity.dataset,
  useCdn: true
});

export default client;
