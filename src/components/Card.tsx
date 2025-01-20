import React from "react";
import styles from "@/styles/Properties.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ property, index }) => {
  const router = useRouter();
  const isEven = index % 2 === 0;

  const clipText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const ReadMore = (text, maxLength, propertyId) => {
    const navigateToPropertyPage = () => {
      router.push(`/property/${propertyId}`);
    };

    if (text.length <= maxLength) {
      return <p>{text}</p>;
    }

    return (
      <p>
        {clipText(text, maxLength)}
        <span onClick={navigateToPropertyPage} className="text-blue-500 cursor-pointer">
          {" "}
          Read more
        </span>
      </p>
    );
  };

  return (
    <div
      key={property.id}
      className={`block relative lg:flex flex-col max-w-sm lg:flex-row group max-h-full justify-center lg:max-w-4xl  text-white rounded-lg hover:shadow-black/45 hover:shadow-md transition-all duration-150 ease-out ${
        !isEven ? "lg:flex-row" : "lg:flex-row-reverse lg:self-end"
      }`}
    >
      <Link
        href={property.link}
        className="overflow-hidden block h-56 md:h-64 lg:h-auto w-full lg:w-[50%]"
      >
        <img
          src={property.displayImage}
          alt={property.heading}
          className={`w-full h-full rounded-t-md lg:aspect-square md:rounded-t-none  object-cover transition-transform duration-500 ease-out filter brightness-75 grayscale  ${
        !isEven ? "md:rounded-l-md" : "md:rounded-r-md"
      } group-hover:grayscale-0 group-hover:scale-105`}
        />
      </Link>

      <div
        className={`flex flex-col max-w-lg justify-between lg:justify-center w-full rounded-b-md  py-4 px-4 lg:px-8 space-y-2 lg:space-y-4 ${styles.card_bg} ${
          !isEven ? "lg:pr-10 md:rounded-r-md " : "lg:pl-10 md:rounded-l-md "
        }`}
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold font-poppins">{property.heading}</h2>
          <p className="text-xs md:text-sm font-roboto text-white/80">{property.location}</p>
        </div>

        <div className="font-roboto text-sm text-justify">{ReadMore(property.description, 200, property.id)}</div>

        <a
          href={`/properties/${property.id}`}
          className="text-center text-sm  md:text-base text-accent bg-white w-32 md:w-36 rounded font-bold px-4 py-2"
        >
          View Property
        </a>
      </div>
    </div>
  );
};

export default Card;
