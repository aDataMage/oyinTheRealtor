"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Gallary = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const images = [
    { src: "/image0.jpg", colSpan: 3, rowSpan: 1 },
    { src: "/image1.jpg", colSpan: 4, rowSpan: 1 },
    { src: "/image2.jpg", colSpan: 3, rowSpan: 2 },
    { src: "/image3.jpg", colSpan: 2, rowSpan: 1 },
    { src: "/image4.jpg", colSpan: 3, rowSpan: 2 },
    { src: "/image5.jpg", colSpan: 2, rowSpan: 2 },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImage = (index: number) => {
    setCurrentImage(index);
    openDialog();
  };

  return (
    <div className="h-screen w-full grid grid-rows-2 grid-cols-10 gap-2">
      {images.map((img, index) => (
        <div
          key={index}
          className={`col-span-${img.colSpan} row-span-${img.rowSpan} relative overflow-clip`}
        >
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover grayscale saturate-100 hover:scale-110 hover:grayscale-0 transition-all duration-300 ease-in"
              src={img.src}
              alt={`Gallery Item ${index + 1}`}
              onClick={() => openImage(index)}
            />
          </div>
        </div>
      ))}
      <ImageDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentImage={currentImage}
        controllers={{ nextImage, prevImage }}
      />
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
      <DialogContent
        tabIndex={-1}
        className="flex gap-4 w-full h-[90vh] items-center justify-center  px-0 bg-transparent border-none"
      >
        <DialogTitle hidden={true}></DialogTitle>
        <div>
          <CircleChevronLeft
            onClick={controllers.prevImage}
            className="w-12 h-12 text-accent pointer-events-auto cursor-pointer"
          />
        </div>
        <div>
          <img className="w-full" src={`/image${currentImage}.jpg`} />
        </div>

        <div>
          <CircleChevronRight
            onClick={controllers.nextImage}
            className="w-12 h-12 text-accent pointer-events-auto cursor-pointer"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Gallary;
