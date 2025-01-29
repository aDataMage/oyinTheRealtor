import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillTikTok } from "react-icons/ai";

type Props = {};

function Footer({}: Props) {
  const SocialMedia = [
    {
      _id: 0,
      name: "Facebook",
      icon: (
        <AiFillFacebook
          size={38}
          className="hover:fill-accent transition-colors duration-200 ease-in"
        />
      ),
      link: "https://www.facebook.com/funmilayo.oshinlagun.7?mibextid=ZbWKwL",
    },
    {
      _id: 1,
      name: "Instergram",
      icon: (
        <AiFillInstagram
          size={38}
          className="hover:fill-accent transition-colors duration-200 ease-in"
        />
      ),
      link: "https://www.instagram.com/_oyintherealtor?igsh=MTNrM2c0NGR1ZHAxcQ==",
    },
    {
      _id: 2,
      name: "Tiktok",
      icon: (
        <AiFillTikTok
          size={38}
          className="hover:fill-accent transition-colors duration-200 ease-in"
        />
      ),
      link: "https://www.tiktok.com/@a_be_bi?_t=ZM-8srl6ciFRKw&_r=1",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-3 space-y-4 gap-4 px-4 w-full items-center justify-items-center">
          <div>
            <h2 className="text-2xl text-center font-semibold">About Us</h2>
            <p className="mt-4 text-center max-sm:max-w-sm">
              We are a real estate company that helps you find the best property
              that suits your needs
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-center font-semibold">Contact Us</h2>
            <p className="mt-4 flex flex-col text-center">
              <span>Phone: +234-905-056-4698</span>
              <span>Email: adejorieniola@gmail.com </span>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Social Media</h2>
            <p className="mt-4 flex justify-center gap-2">
              {SocialMedia.map((account) => (
                <Link href={account.link} target="_blank" key={account._id}>
                  {account.icon}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
