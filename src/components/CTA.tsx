import React from "react";

type Props = {};

function CTA({}: Props) {
  return (
    <section>
      <div className="bg-accent text-white py-12">
        <div className="container max-md:flex max-md:justify-center mx-auto">
          <div className="text-center  max-sm:max-w-sm">
            <h2 className="text-3xl font-semibold">
              Can't Find Your Dream Property?
            </h2>
            <p className="mt-4">
              We are here to help you find the best property that suits your
              needs
            </p>
            <div className="mt-8">
              <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-800 hover:text-accent-foreground transition-all duration-200 ease-in-out">
                Find Dream Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
