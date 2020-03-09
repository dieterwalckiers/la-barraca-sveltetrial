import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "p3ezynln",
  dataset: "production",
  useCdn: true
});

export default client;
