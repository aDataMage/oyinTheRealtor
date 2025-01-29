"use client";

import React from "react";
import Link from "next/link";
import { Property } from "@/sanity/types";
import { urlFor } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import { useInView } from "framer-motion"; // Hook to detect when in view

const Card = ({ property, index }: { property: Property; index: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Utility function: Clips text if it exceeds the specified max length
  const clipText = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;

  // Renders the property description with "Read More" logic
  const renderReadMore = (text: string, maxLength: number) => {
    const clippedText = clipText(text, maxLength);
    return text.length > maxLength ? (
      <p className="max-w-sm">
        {clippedText}{" "}
        <Link
          href={`/properties/${property?.slug?.current}`}
          className="text-accent underline hover:text-blue-600"
        >
          Read more
        </Link>
      </p>
    ) : (
      <p>{text}</p>
    );
  };

  // Derive Image URL or fallback to placeholder
  const imageUrl = property.displayImage 
  ? urlFor(property.displayImage)?.width(550)?.height(310)?.url() 
  : "https://placehold.co/550x310/png";

  return (
    <motion.div
      ref={ref} // Attach ref for visibility detection
      key={property._id}
      className={`relative flex flex-col sm:flex-row max-w-sm sm:max-w-4xl text-white rounded-lg shadow-md transition-transform duration-150 ease-out group`}
      initial={{ opacity: 0, y: 50 }} // Start hidden and below the viewport
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only if in view
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Staggered effect
      whileHover={{ scale: 1.02 }} // Slight scale increase on hover
    >
      {/* Image Container */}
      <Link
        href={`/properties/${property?.slug?.current}`}
        className="relative block h-56 sm:h-64 lg:h-auto w-full sm:w-[50%] overflow-hidden"
      >
        <Image
          src={imageUrl || "no"}
          alt={property.name || "Property Image"}
          width={550}
          height={310}
          className={`object-cover w-full h-full filter brightness-75 transition-transform duration-500 ease-out group-hover:brightness-100 group-hover:scale-105 sm:rounded-l-lg`}
        />
      </Link>

      {/* Content Container */}
      <div
        className={`flex flex-col shadow-sm hover:shadow-md justify-between w-full py-4 px-4 sm:px-8 space-y-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg sm:rounded-none sm:rounded-l-lg`}
      >
        {/* Title & Location */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            {property.name}
          </h2>
          <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
            {property.location}
          </p>
        </div>

        {/* Property Description */}
        <div className="font-roboto text-sm text-justify">
          {renderReadMore(property.description!, 150)}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center sm:justify-start">
          <Link
            href={`/properties/${property?.slug?.current}`}
            className="text-sm sm:text-base font-bold text-gray-800 bg-white rounded px-4 py-2 hover:bg-gray-200 transition-all"
          >
            View Property
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
