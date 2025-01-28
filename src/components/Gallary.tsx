"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { LayoutGroup, motion } from "framer-motion";

const Gallary = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isPrefetched, setIsPrefetched] = useState(false);
  const images = [
    { src: "/image0.jpg", colSpan: 3, rowSpan: 1 },
    { src: "/image1.jpg", colSpan: 4, rowSpan: 1 },
    { src: "/image2.jpg", colSpan: 3, rowSpan: 2 },
    { src: "/image3.jpg", colSpan: 2, rowSpan: 1 },
    { src: "/image4.jpg", colSpan: 3, rowSpan: 2 },
    { src: "/image5.jpg", colSpan: 2, rowSpan: 2 },
  ];

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((img) => {
        const imgElement = new Image();
        imgElement.src = img.src;
        imgElement.onload = () => {
          if (img === images[images.length - 1]) {
            setIsPrefetched(true); // Mark as prefetched when the last image loads
          }
        };
      });
    };

    preloadImages();
  }, [images]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImage = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  if (!isPrefetched) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="h-screen w-full grid grid-rows-2 grid-cols-10 gap-2">
      <LayoutGroup>
        {images.map((img, index) => (
          <motion.div
            key={index}
            layoutId={`image-${index}`}
            className={`col-span-${img.colSpan} row-span-${img.rowSpan} relative overflow-hidden`}
          >
            <motion.img
              className="w-full h-full object-cover cursor-pointer filter grayscale"
              src={img.src}
              alt={`Gallery Item ${index + 1}`}
              onClick={() => openImage(index)}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              whileHover={{
                filter: "grayscale(0%)",
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ))}
      </LayoutGroup>
      {isOpen && (
        <ImageDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentImage={currentImage}
          controllers={{ nextImage, prevImage }}
        />
      )}
    </div>
  );
};

type ImageDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentImage: number;
  controllers: {
    nextImage: () => void;
    prevImage: () => void;
  };
};

const ImageDialog = ({
  isOpen,
  setIsOpen,
  currentImage,
  controllers,
}: ImageDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <motion.div layout>
        <DialogContent
          tabIndex={-1}
          className="flex gap-4 w-full h-[90vh] items-center justify-center px-0 bg-transparent border-none"
        >
          <DialogTitle hidden={true}></DialogTitle>
          <div>
            <CircleChevronLeft
              onClick={controllers.prevImage}
              className="w-12 h-12 text-accent pointer-events-auto cursor-pointer"
            />
          </div>
          <div className="w-full h-full">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=""
            >
              <motion.img
                layoutId={`image-${currentImage}`}
                className="w-full h-full object-contain"
                src={`/image${currentImage}.jpg`}
                alt={`Dialog Image ${currentImage}`}
              />
            </motion.div>
          </div>

          <div>
            <CircleChevronRight
              onClick={controllers.nextImage}
              className="w-12 h-12 text-accent pointer-events-auto cursor-pointer"
            />
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default Gallary;
