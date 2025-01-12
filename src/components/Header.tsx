"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import styles from "../styles/Home.module.css";
import { Button } from "./ui/button";

export default function Header() {
  const links = [
    { key: 1, text: "Home", href: "/" },
    { key: 2, text: "Properties", href: "/properties" },
    { key: 3, text: "About Us", href: "/about" },
  ];

  const [isVisible, setIsVisible] = useState(true);
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

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-8 py-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
        </div>
        <ul className="flex space-x-10 align-middle self-center text-lg text-slate-800">
          {links.map((link) => (
            <li key={link.key} className="relative">
              <a href={link.href} className={styles.nav_link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="text-lg" size="lg">
          Contact Me
        </Button>
      </nav>
    </header>
  );
}
