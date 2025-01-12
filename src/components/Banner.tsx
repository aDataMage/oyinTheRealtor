import React from "react";
import styles from "../styles/Banner.module.css";
import Image from "next/image";
import Owner from "../../public/owner.jpg";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import TypingAnimation from "./TypingText";

const Banner = () => {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Background Banner */}
      <div className={styles.banner}></div>

      {/* Content Overlay */}
      <div className="text-white h-full bg-black bg-opacity-50 flex justify-center items-center">
        {/* Text Section */}
        <div className="space-y-4 p-4 w-1/2">
          <motion.h1 className="text-4xl font-poppins font-bold text-left">
            <TypingAnimation />
          </motion.h1>

          <motion.div
            className="text-center p-8 bg-gray-800 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, ease: "backIn" }}
          >
            <p className="text-left font-roboto font-light max-w-lg">
              As a Real Estate Consultant, I provide expert guidance for buying,
              selling, or investing in properties. My services include market
              analysis, property valuation, and negotiation support, tailored to
              meet your unique needs. Let's work together to achieve your real
              estate goals.
            </p>
          </motion.div>

          <motion.div
            className="pt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, ease: "circIn" }}
          >
            <Button variant="outline">Contact me</Button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center h-full w-1/4">
          <motion.div
            className="w-[280px] h-[400px] border border-accent absolute -left-[10%]"
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
            className="absolute z-10 -left-[20%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
