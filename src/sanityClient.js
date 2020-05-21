import sanityClient from "@sanity/client";
import { getConfig } from "./config";


console.log("using dataset", getConfig().sanity.dataset);

const client = sanityClient({
  projectId: "p3ezynln",
  dataset: getConfig().sanity.dataset,
  useCdn: true
});


export default client;
