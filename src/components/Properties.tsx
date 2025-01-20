"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { useProperties } from "@/contextProvider/PropertyContext";

const Properties = () => {
  const { getAllProperties } = useProperties();
  const properties = getAllProperties();

  return (
    <div className="">
      <div className="px-4 lg:px-36 h-full space-y-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Properties
        </h1>
        <div>
          <div className="space-y-4 flex items-center lg:items-stretch flex-col">
            {properties.slice(0, 3).map((property) => (
              <Card property={property} index={property.id} key={property.id} />
            ))}
          </div>
          {properties.length > 3 && (
            <div className="flex justify-center mt-4">
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

export default Properties;
