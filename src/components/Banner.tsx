import React from "react";
import styles from "../styles/Banner.module.css";
import Image from "next/image";
import Owner from "../../public/owner.jpg";
import LinkButton from "./Button";
import { Button } from "./ui/button";
const Banner = () => {
  return (
    <div className="continer mx-auto relative h-[100vh] overflow-clip">
      <div className={styles.banner}></div>
      <div className="text-white h-full bg-black bg-opacity-50 flex  justify-center items-center">
        <div className="space-y-4 p-4 w-1/2">
          <h1 className="text-4xl font-poppins font-bold text-left">
            Hi, I'm OyinTheRealtor
          </h1>
          <div className="text-center p-4  bg-gray-800 rounded-lg">
            <p className="text-left font-roboto font-light max-w-xl">
              As a trusted Real Estate Consultant, I specialize in providing
              expert advice and personalized solutions for individuals and
              businesses navigating the dynamic real estate market. Whether
              you’re buying, selling, or investing in residential or commercial
              properties, I am committed to delivering exceptional service and
              insights tailored to your specific needs. With in-depth market
              knowledge and a customer-focused approach, I aim to help clients
              make informed decisions, maximize investments, and achieve their
              real estate goals. My comprehensive services also include property
              valuation, market analysis, negotiation, and guidance on the
              latest trends, ensuring a smooth and successful real estate
              experience.
            </p>
          </div>
          <div className="pt-2">
            <Button variant="outline">Contact me</Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-full w-1/4">
          <Image
            src={Owner}
            alt="Owner"
            layout="instrinstic"
            width={300}
            height={300}
            className="absolute z-10 -left-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
