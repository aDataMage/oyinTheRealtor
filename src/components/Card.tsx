import React from "react";
import styles from "@/styles/Properties.module.css";
import Link from "next/link";
import { Property } from "@/sanity/types";
import { urlFor } from "@/lib/utils";
import Image from "next/image";

const Card = ({ property, index }:{property:Property, index: number}) => {

  const isEven = index % 2 === 0;

  const clipText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const ReadMore = (text, maxLength, propertyId) => {

    if (text.length <= maxLength) {
      return <p>{text}</p>;
    }

    return (
      <p className="max-w-sm">
        {clipText(text, maxLength)}
        <Link
                href={`/properties/${property?.slug?.current}`}
                className="text-blue-800"
>
          Read more
        </Link>
       
      </p>
    );
  };
    const ImageUrl = property.displayImage
    ? urlFor(property.displayImage)?.width(550).height(310).url()
    : null;
  return (
    <div
      key={property._id}
      className={`block relative sm:flex flex-col max-w-sm sm:flex-row group max-h-full justify-center sm:max-w-4xl  text-white rounded-lg hover:shadow-black/45 hover:shadow-md transition-all duration-150 ease-out ${
        !isEven ? "sm:flex-row" : "sm:flex-row-reverse sm:self-end"
      }`}
    >
      <Link
        href={`/properties/${property?.slug?.current}`}
        className="overflow-hidden block h-56 sm:h-64 lg:h-auto w-full sm:w-[50%]"
      >
        <Image
          src={ImageUrl || "https://placehold.co/550x310/png"}
          alt={property.name || "Event"}
          height="310"
          width="550"
          className={`w-full h-full max-sm:rounded-t-md sm:aspect-square max-md:shadow-sm  object-cover transition-transform duration-500 ease-out filter brightness-75 md:grayscale  ${
        !isEven ? "sm:rounded-l-md" : "sm:rounded-r-md"
      } group-hover:grayscale-0 group-hover:scale-105`}
        />
      </Link>

      <div
        className={`flex flex-col max-w-lg justify-between sm:justify-center w-full max-sm:rounded-b-md  py-4 px-4 sm:px-8 space-y-2 sm:space-y-4 ${styles.card_bg} ${
          !isEven ? "sm:pr-10 lg:rounded-r-md " : "max-sm:pl-10 lg:rounded-l-md "
        }`}
      >
        <div>
          <h2 className="text-xl max-sm:text-center sm:text-2xl font-bold font-poppins">{property.name}</h2>
          <p className="text-xs sm:text-sm font-roboto max-sm:text-center text-white/80">{property.location}</p>
        </div>

        <div className="font-roboto text-sm text-justify">{ReadMore(property.description, 200, index)}</div>

        <a
          href={`/properties/${property?.slug?.current}`}
          className="text-center max-sm:self-center text-sm  sm:text-base text-accent bg-white w-32 sm:w-36 rounded font-bold px-4 py-2"
        >
          View Property
        </a>
      </div>
    </div>
  );
};

export default Card;
