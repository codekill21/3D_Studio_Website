import React from "react";
import Image from "next/image";
import { studio } from "@/public/assets";

const StudioInfo = () => {
  return (
    <div
      id="about"
      className=" w-1/2 flex flex-col items-center self-center text-center  p-12 space-y-12"
    >
      <h1 className="font-bold text-[90px]">Who We are</h1>
      <Image
        src={studio}
        width={400}
        height={500}
        className="rounded-3xl drop-shadow-2xl grayscale hover:grayscale-0 brightness-75"
        alt="studio"
      />
      <p className="text-sm font-semibold ">
        We are Digital 3D modeling agency specializes in creating high-quality
        3D models for varoius industries such as architecture, gaming, film, and
        product design. Our team of expert 3D artists and technicians use
        state-of-the-art technology and software to bring your ideas to life.
      </p>
    </div>
  );
};

export default StudioInfo;
