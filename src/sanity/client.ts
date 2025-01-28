import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lulifl7g",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});