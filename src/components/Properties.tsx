import React from "react";
import Card from "./Card";
import Link from "next/link";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";

// Define the query to fetch the latest 3 properties by date added
const EVENTS_QUERY = defineQuery(`
  *[_type == "property"] | order(dateAdded desc)
`);

export default async function Properties() {
  // Fetch properties data from Sanity
  const { data: properties } = await sanityFetch({ query: EVENTS_QUERY });

  if (!properties || properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="text-xl font-semibold text-gray-600">
          No properties available at the moment.
        </h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="container mx-auto px-4 lg:px-36">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Properties
        </h1>

        {/* Properties List */}
        <div className="space-y-6 flex flex-col items-center">
          {properties.slice(0, 3).map((property, i) => (
            <Card property={property} index={i} key={property._id} />
          ))}
        </div>

        {/* Show More Button */}
        {properties.length > 3 && (
          <div className="flex justify-center mt-6">
            <Link href="/properties">
              <button className="border border-accent text-accent px-6 py-3 rounded-md shadow-md hover:bg-accent hover:text-white transition-all duration-200">
                Show More Properties
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
