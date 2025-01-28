import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillTikTok } from "react-icons/ai";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-accent text-white py-12">
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
              <span>
                <AiFillFacebook
                  size={38}
                  className="hover:fill-gray-800 transition-colors duration-200 ease-in"
                />
              </span>
              <span>
                <AiFillTikTok
                  size={38}
                  className="hover:fill-gray-800 transition-colors duration-200 ease-in"
                />
              </span>
              <span>
                <AiFillInstagram
                  size={38}
                  className="hover:fill-gray-800 transition-colors duration-200 ease-in"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
