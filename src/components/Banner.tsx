// "use client"
// import React from "react";
// import styles from "../styles/Banner.module.css";
// import Image from "next/image";
// import Owner from "../../public/owner.jpg";
// import { Button } from "./ui/button";
// import { motion } from "motion/react";
// import TypingAnimation from "./TypingText";

// const Banner = () => {
//   return (
//     <div className="relative lg:h-[100vh] overflow-hidden">
//       {/* Background Banner */}
//       <div className={styles.banner}></div>

//       {/* Content Overlay */}
//       <div className="text-white h-full bg-black bg-opacity-50 md:flex justify-center items-center">
//         {/* Text Section */}
//         <div className="space-y-2 flex flex-col md:space-y-4 p-4 md:w-1/2 max-w-xl max-md:mx-auto">
//           <motion.h1 className="text-4xl font-poppins font-bold text-center md:text-left">
//             <TypingAnimation />
//           </motion.h1>

//           <motion.div
//             className="text-center p-4 md:p-[2vw] max-md:self-center bg-gray-800 rounded-lg max-w-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, ease: "backIn" }}
//           >
//             <p className="text-left max-md:text-sm font-roboto font-light md:max-w-lg">
//               As a Real Estate Consultant, I provide expert guidance for buying,
//               selling, or investing in properties. My services include market
//               analysis, property valuation, and negotiation support, tailored to
//               meet your unique needs. Let's work together to achieve your real
//               estate goals.
//             </p>
//           </motion.div>

//           <motion.div
//             className="pt-2 w-full flex max-md:justify-center"
//             initial={{ opacity: 0,}}
//             animate={{ opacity: [0,0.3,0.5,0.8,1],}}
//             transition={{ delay: 1.5}}
//           >
//             <Button variant="outline">Contact me</Button>
//           </motion.div>
//         </div>

//         {/* Image Section */}
//         <div className="hidden  relative md:flex justify-center items-center h-fit w-1/4">
//           <motion.div
//             className="h-[32vw] w-[23vw] max-w-[280px] max-h-[390px] rounded-r-sm border border-accent absolute -left-[10%]"
//             animate={{
//               scale: [1, 1.05, 1],
//             }}
//             transition={{ repeat: 2, duration: 2, ease: "easeInOut" }}
//           />
//           <Image
//             src={Owner}
//             alt="Owner"
//             width={300}
//             height={400}
//             className="absolute  z-10 -left-[20%] rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

"use client";
import React from "react";
import Image from "next/image";
import Owner from "../../public/owner.jpg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingText";

const Banner = () => {
  return (
    <div className="relative lg:h-[100vh] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      {/* Background Image */}
      <motion.div className="absolute inset-0 bg-[url('/banner1.jpg')] bg-cover bg-center grayscale blur" />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col md:flex-row justify-center items-center text-white p-4">
        {/* Text Section */}
        <motion.div
          className="space-y-2 min-w-sm md:space-y-4 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Typing Animation for Heading */}
          <motion.h1 className="text-4xl md:text-5xl font-poppins font-bold">
            <TypingAnimation />
          </motion.h1>

          {/* Description */}
          <motion.div
            className="p-4 bg-gray-800 bg-opacity-75 rounded-lg max-sm:max-w-sm max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-sm md:text-base font-roboto font-light">
              As a Real Estate Consultant, I provide expert guidance for buying,
              selling, or investing in properties. My services include market
              analysis, property valuation, and negotiation support, tailored to
              meet your unique needs. Let's work together to achieve your real
              estate goals.
            </p>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            className="pt-4 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              variant="outline"
              className="bg-transparent border-white hover:bg-white hover:text-black"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden md:flex justify-center items-center w-1/4 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Decorative Border */}
          <motion.div
            className="absolute h-[32vw] w-[30vw] max-w-[280px] right-[2%] max-h-[390px] rounded-lg border-2 border-accent"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Owner Image */}
          <Image
            src={Owner}
            alt="Owner"
            width={300}
            height={400}
            className="z-10 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
