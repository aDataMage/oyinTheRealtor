"use client"
import React from "react";
import styles from "../styles/Banner.module.css";
import Image from "next/image";
import Owner from "../../public/owner.jpg";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import TypingAnimation from "./TypingText";

const Banner = () => {
  return (
    <div className="relative lg:h-[100vh] overflow-hidden">
      {/* Background Banner */}
      <div className={styles.banner}></div>

      {/* Content Overlay */}
      <div className="text-white h-full bg-black bg-opacity-50 md:flex justify-center items-center">
        {/* Text Section */}
        <div className="space-y-2 flex flex-col md:space-y-4 p-4 md:w-1/2 max-w-xl max-md:mx-auto">
          <motion.h1 className="text-4xl font-poppins font-bold text-center md:text-left">
            <TypingAnimation />
          </motion.h1>

          <motion.div
            className="text-center p-4 md:p-[2vw] max-md:self-center bg-gray-800 rounded-lg max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, ease: "backIn" }}
          >
            <p className="text-left max-md:text-sm font-roboto font-light md:max-w-lg">
              As a Real Estate Consultant, I provide expert guidance for buying,
              selling, or investing in properties. My services include market
              analysis, property valuation, and negotiation support, tailored to
              meet your unique needs. Let's work together to achieve your real
              estate goals.
            </p>
          </motion.div>

          <motion.div
            className="pt-2 w-full flex max-md:justify-center"
            initial={{ opacity: 0,}}
            animate={{ opacity: [0,0.3,0.5,0.8,1],}}
            transition={{ delay: 1.5}}
          >
            <Button variant="outline">Contact me</Button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="hidden  relative md:flex justify-center items-center h-fit w-1/4">
          <motion.div
            className="h-[32vw] w-[23vw] max-w-[280px] max-h-[390px] rounded-r-sm border border-accent absolute -left-[10%]"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: 2, duration: 2, ease: "easeInOut" }}
          />
          <Image
            src={Owner}
            alt="Owner"
            width={300}
            height={400}
            className="absolute  z-10 -left-[20%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
