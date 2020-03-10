import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "p3ezynln",
  dataset: "development",
  useCdn: true
});

export default client;
