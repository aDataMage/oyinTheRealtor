import "./globals.css";
import Header from "../components/Header";
import { Roboto, Poppins, Montserrat, Open_Sans, Lato } from "next/font/google";
import { PropertiesProvider } from "@/contextProvider/PropertyContext";
import { CTA, Footer } from "@/components";
import { SanityLive } from "@/sanity/live";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata = {
  title: "OyinTheRealtor",
  description: "Real Estate Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
