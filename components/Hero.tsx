import React from "react";
import CustomButton from "./CustomButton";
import japan from "@/public/japan.svg";
import Image from "next/image";
import video1 from "@/public/video.svg";

const Hero = () => {
  return (
    <div id="home" className="space-y-12">
      <div className="flex items-center flex-col space-y-8 p-8">
        <div className="flex flex-col font-semibold text-[60px] items-center">
          <div className="flex flex-row space-x-2">
            <h1>Bringing Ideas </h1>
            <Image src={video1} width={50} height={50} alt="japan" />

            <h1>to Life,</h1>
          </div>

          <h1>One Dimension at a Time</h1>
        </div>

        <div className="flex flex-row items-center space-x-8">
          <h3>We are 3D design studio</h3>
          <CustomButton
            title="Talk to us"
            containerStyles="bg-black border text-sm text-white font-bold rounded-full p-4 pr-6 pl-6"
          />
          <div className="flex flex-row items-center space-x-2">
            <h3>Based in Tokyo, Japan </h3>

            <Image src={japan} width={20} height={20} alt="japan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
