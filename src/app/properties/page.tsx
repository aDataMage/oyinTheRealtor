import React from "react";
import Card from "@/components/Card";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { BackButton } from "@/components/BackButton";

const POR_QUERY = defineQuery(`*[_type == "property"] | order(dateAdded desc)`);

export default async function PropertiesPage() {
  const { data: properties } = await sanityFetch({ query: POR_QUERY });

  return (
    <div className="flex relative flex-col justify-center items-center space-y-8 my-10">
      <BackButton />
      <h1 className="font-poppins text-3xl font-bold">Properties</h1>
      <div className="flex flex-wrap space-y-3 justify-center">
        {properties.map((property, index) => (
          <Card key={property._id} property={property} index={index} />
        ))}
      </div>
    </div>
  );
}
