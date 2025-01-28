import React from "react";
import Gallary from "@/components/Gallary";
import { motion } from "motion/react";
import ImageSwiper from "@/components/ImageSwiper";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Property } from "@/sanity/types";
import { components } from "@/components/PortableImage";

const EVENT_QUERY = defineQuery(`*[
    _type == "property" &&
    slug.current == $slug
  ][0]`);


export default async function PropertyPage({params}:{params:Promise<{slug:string}>}) {
  const { data: property } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });
  if (!property) {
    notFound();
  }
  // const params: { id: string } | null = useParams();
  // const { getPropertyById, loading } = useProperties();

  // // Fetch property by ID
  // if (!params) {
  //   return <div className="text-center py-20">Invalid property ID</div>;
  // }
  // const property = getPropertyById(Number(params.id));

  // // Loading state
  // if (loading) {
  //   return <div className="text-center py-20">Loading...</div>;
  // }

  // // Property not found state
  // if (!property) {
  //   return <div className="text-center py-20">Property not found</div>;
  // }

  // Render the property details
  return (
    // <div className="container mx-auto space-y-10 py-10">
    //   {/* Main Section */}
    //   <div className="flex flex-col md:flex-row mx-4 space-y-8 md:space-y-0 md:space-x-10 md:h-[80vh]">
    //     {/* Property Image */}
    //     <div className="md:w-1/3 md:h-full sm:w-10/12 sm:self-center shrink-0 shadow-md rounded-lg overflow-hidden">
    //       <motion.img
    //         initial={{
    //           filter: "grayscale(1)",
    //           scale: "110%",
    //         }}
    //         animate={{
    //           filter: "grayscale(0)",
    //           scale: "100%",
    //         }}
    //         transition={{
    //           duration: 1,
    //           ease: "easeIn",
    //         }}
    //         className="object-cover w-full h-full"
    //         src={property.displayImage}
    //         alt={property.heading}
    //       />
    //     </div>

    //     {/* Property Details */}
    //     <div className="flex flex-col items-center md:items-start  space-y-4 md:w-1/2 md:justify-evenly">
    //       <h1 className="text-center md:text-left font-poppins font-semibold text-2xl text-accent">
    //         {property.heading}
    //       </h1>
    //       <p className="font-roboto text-sm md:text-base text-justify text-gray-800">
    //         {property.description}
    //       </p>
    //       <div>
    //         <button
    //           className="bg-accent self-center text-accent2 px-4 py-2 rounded hover:bg-accent/80 hover:scale-105 transition-all duration-150 ease-out hover:shadow-md"
    //           type="button"
    //         >
    //           Learn more
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Gallery Section */}
    //   <div className="hidden mx-4 sm:block h-fit relative bg-black/70 rounded-lg shadow-md p-4 space-y-4">
    //     <h2 className="text-center font-poppins text-3xl text-accent-foreground font-semibold">
    //       Gallary
    //     </h2>
    //     <Gallary images={property.images} />
    //   </div>
    //   <div className="mx-8 sm:hidden max-w-sm self-center">
    //           <ImageSwiper images={property.images}/>
    //         </div>
      
    // </div>
    <div className="contaner px-4 mx-auto my-8 flex flex-col items-center gap-2"> <h1 className="text-center max-w-screen-sm text-accent font-extrabold font-poppins text-4xl"> {property.name}</h1>
    <h2 className="text-center text-gray-500 font-light font-roboto text-base mb-8">{property.location}</h2>
    {property?.mainContent ? (
        <div className="prose mx-auto container">
          <PortableText value={property.mainContent} components={components}/>
        </div>
      ) : null}
    </div>
  );
}


