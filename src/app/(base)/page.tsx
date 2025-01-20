"use client";
import React from "react";
import { Banner, CTA, Footer, Properties } from "@/components";

export default function Home() {
  return (
    <div className=" space-y-8 md:space-y-4 lg:space-y-8">
      <Banner />
      <Properties />
    </div>
  );
}
