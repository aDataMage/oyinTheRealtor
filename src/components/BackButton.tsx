"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { CircleArrowLeft } from "lucide-react";

type Props = {};

export const BackButton = (props: Props) => {
  const router = useRouter(); // Get router instance
  return (
    <button
      onClick={() => router.back()} // Go back to the previous page
      className="px-2 py-2 bg-accent absolute left-4 top-0 text-white rounded hover:bg-gray-700 transition"
    >
      <CircleArrowLeft size={30} />
    </button>
  );
};
