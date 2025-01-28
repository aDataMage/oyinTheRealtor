// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const { projectId, dataset } = client.config();
export const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;