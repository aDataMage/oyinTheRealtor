import React from "react";
import Card from "./Card";
import Link from "next/link";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const EVENTS_QUERY = defineQuery(`*[_type == "property"] | order(dateAdded desc)[0...3]
`);



export default async function Properties() {
  const { data: properties } = await sanityFetch({ query: EVENTS_QUERY });
  


  return (
    <div className="">
      <div className="px-4 lg:px-36 h-full space-y-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Properties
        </h1>
        <div>
          <div className="space-y-4 flex flex-col">
            {properties.slice(0, 3).map((property,i) => (
              <Card property={property} index={i+1} key={property._id} />
            ))}
          </div>
          {properties.length > 3 && (
            <div className="flex justify-center mt-2">
              <Link href="/properties">
                <button className="border-accent border-solid border text-accent px-6 py-3 rounded-md shadow-md hover:bg-accent/90 transition-all duration-200 ease-in-out">
                  Show More Properties
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


