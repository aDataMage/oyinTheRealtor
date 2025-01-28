"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import styles from "../styles/Home.module.css";
import { Button } from "./ui/button";
import { AlignRight, X } from "lucide-react";
import {AnimatePresence, motion, useAnimate, usePresence, stagger} from "motion/react";


export default function Header() {
  const links = [
    { key: 1, text: "Home", href: "/" },
    { key: 2, text: "Properties", href: "/properties" },
    { key: 3, text: "About Us", href: "/about" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [isMobileDialogOpen, setIsMobileDialogOpen] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide the navbar when scrolling starts

      // Clear the previous timeout, if any
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to show the navbar after scrolling stops, with a delay
      scrollTimeout = setTimeout(() => {
        setTimeout(() => {
          setIsVisible(true); // Add a delay before showing the navbar
        }, 500); // Additional delay in milliseconds
      }, 300); // Delay for detecting scroll stop
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout); // Cleanup the timeout
    };
  }, []);

  // ${
        // isVisible ? "translate-y-0" : "-translate-y-full"
      // }

  return (
    <header
      className={`md:sticky top-0 z-50 bg-white  transition-transform duration-300 `}
    >
      <nav className="px-4 py-2 lg:px-8 lg:py-4 shadow-md flex items-center justify-between">
        <motion.div layoutId="logo" className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
        </motion.div>
        <ul className="md:flex space-x-10 hidden align-middle self-center text-lg text-slate-800">
          {links.map((link) => (
            <li key={link.key} className="relative">
              <a href={link.href} className={styles.nav_link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="text-lg hidden md:block" size="lg">
          Contact Me
        </Button>
        <AlignRight className="md:hidden" size={38} onClick={() => setIsMobileDialogOpen(true)}/>
              <AnimatePresence>
        {isMobileDialogOpen && (
          <MobileDialog links={links} setIsMobileDialogOpen={setIsMobileDialogOpen}/>
        )}</AnimatePresence>
      </nav>
    </header>
  );
}

const MobileDialog = ({ links, setIsMobileDialogOpen }) => {

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();


  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await animate("li", {opacity:0, y:20}, {duration: 0.4, ease: "easeOut", delay: stagger(0.1)});
        await animate (".btn", {scale:0.8, opacity:0.2}, {duration:0.3, ease:"easeOut"})
        await animate(scope.current, { opacity: 0, y: "-100%" }, { duration: 0.7, ease: "easeOut" });

        safeToRemove();
      } 
      exitAnimation();
    } else {
        const enterAnimation = async () => {
          await animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.5, ease: "easeIn" });
           await animate (".btn", {scale: 1, opacity: 1}, {duration:0.3, ease:"easeOut"})
          await animate("li", {opacity:1, y:0}, {duration: 0.4, ease: "easeIn", delay: stagger(0.1)});
        }
        enterAnimation();
      }
  }, [isPresent])

  
  return (

    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      ref={scope}
      className="fixed flex-col md:hidden inset-0 backdrop-blur-md
     bg-gray-800 z-50 bg-opacity-90 flex items-center justify-center"
    >
      <motion.div layoutId="logo"  className="flex absolute top-4 left-4 items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
        </motion.div>
      <div>
        <X
          onClick={() => setIsMobileDialogOpen(false)}
          size={38}
          className="absolute top-4 right-4 cursor-pointer text-white"
        />
      </div>
      <motion.ul
        className="flex flex-col mb-10 space-y-4 text-white text-2xl"
      >
       
        {links.map((link) => (
          <motion.li
          initial={{ opacity: 0, y: 20 }}
            key={link.key}
            className="relative text-center"
          >
            <a href={link.href} className={styles.nav_link}>
              {link.text}
            </a>
          </motion.li>
        ))}
    
      </motion.ul>
      <motion.div initial={{scale:0.8, opacity:0.5}} className="btn">
        <Button variant="outline" className="text-lg text-white" size="default">
              Contact Me
        </Button>
      </motion.div>
    </motion.div>

  );
};

