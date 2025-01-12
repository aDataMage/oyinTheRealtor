"use client";
import React from "react";
import { useProperties } from "@/contextProvider/PropertyContext";
import { useParams } from "next/navigation";
import Gallary from "@/components/Gallary";


function PropertyPage() {
  const params: {id: string} | null = useParams();
  const { getPropertyById, loading } = useProperties();

  // Fetch property by ID
  if (!params) {
    return <div className="text-center py-20">Invalid property ID</div>;
  }
  const property = getPropertyById(Number(params.id));

  // Loading state
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // Property not found state
  if (!property) {
    return <div className="text-center py-20">Property not found</div>;
  }

  // Render the property details
  return (
    <div className="container mx-auto space-y-10 py-10">
      {/* Main Section */}
      <div className="flex space-x-10 h-[80vh]">
        {/* Property Image */}
        <div className="w-1/3 h-full shrink-0 shadow-md rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={property.displayImage}
            alt={property.heading}
          />
        </div>

        {/* Property Details */}
        <div className="flex flex-col w-1/2 justify-evenly">
          <h1 className="font-poppins font-semibold text-2xl text-accent">
            {property.heading}
          </h1>
          <p className="font-roboto text-gray-800">{property.description}</p>
          <div>
            <button
              className="bg-accent text-accent2 px-4 py-2 rounded hover:bg-accent/80 hover:scale-105 transition-all duration-150 ease-out hover:shadow-md"
              type="button"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="h-fit relative bg-black/70 rounded-lg shadow-md p-4 space-y-4">
      <h2 className="text-center font-poppins text-3xl text-accent-foreground font-semibold"> Gallary</h2>
        <Gallary images={property.images} />
      </div>
    </div>
  );
}

export default PropertyPage;
