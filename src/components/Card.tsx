import React from 'react';
import styles from "@/styles/Properties.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Card = ({ property, index }) => {
    const router = useRouter();
    const isEven = index % 2 === 0;
    const clipText = (text, maxLength) => {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + "...";
    };
    
    const ReadMore = (text, maxLength, propertyId) => {
      const [isReadMore, setIsReadMore] = React.useState(true);
    
      const navigateToPropertyPage = () => {
        router.push(`/property/${propertyId}`);
      };
    
      if (text.length <= maxLength) {
        return <p>{text}</p>;
      }
    
      return (
        <p>
          {clipText(text, maxLength)}
          <span onClick={navigateToPropertyPage} className="text-blue-500 cursor-pointer">
            Read more
          </span>
        </p>
      );
    };
    return (
        <div
            key={property.id}
            className={`flex group max-h-80 justify-center max-w-4xl gap-4 ${styles.card_bg} text-white rounded-lg hover:shadow-black/45 hover:shadow-md transition-all duration-150 ease-out ${
                !isEven ? 'flex-row' : 'flex-row-reverse self-end'
            }`}
        >
            <Link href={property.link} className="overflow-clip w-[90%]">
                <img
                    src={property.displayImage}
                    alt={property.heading}
                    className="w-[700px] aspect-square group-hover:scale-110 object-cover transition-all duration-500 ease-out filter brightness-75 grayscale group-hover:grayscale-0"
                />
            </Link>

            <div className={`flex flex-col justify-center w-[110%]  space-y-4 ${!isEven ? 'pr-10' : 'pl-10'} `}>
              <div>
                <h2 className="text-2xl font-bold font-poppins">{property.heading}</h2>
                <p className="text-md font-roboto text-white/80">{property.location}</p>
              </div>
                
                <div className='font-roboto'>{ReadMore(property.description,200,property.id)}</div>
                <a
                    href={`/properties/${property.id}`}
                    className="text-accent bg-white w-36 rounded font-bold px-4 py-2"
                >
                    View Property
                </a>
            </div>
        </div>
    );
};

export default Card;