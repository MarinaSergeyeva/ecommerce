import { createClient } from "next-sanity";
import imageBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "8zjvbx10",
  dataset: "production",
  apiVersion: "2024-03-27",
  useCdn: true,
});

const builder = imageBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
