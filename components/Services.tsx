import React from "react";
import Image from "next/image";
import { image1 } from "@/public/assets";
import r_arrow from "@/public/arrow.svg";

const Services = () => {
  return (
    <div
      id="service"
      className="bg-black text-white p-20 space-y-8 flex flex-col items-center text-center"
    >
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="flex flex-row justify-between items-center text-start space-x-24 shadow-2xl p-4">
        <div className="space-y-6">
          <div className="flex flex-row space-x-8 bg-[#343232] font-bold text-lg p-6 rounded-xl">
            <div className="space-y-2">
              <div>
                {" "}
                <h2>3D</h2>
                <h2>Printing</h2>
              </div>
              <div className="text-sm font-light">
                <h3>Printing</h3>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-xl relative -top-10 left-14 bg-black ">
              <Image
                src={r_arrow}
                className="-rotate-45 hover:opacity-70"
                width={40}
                height={40}
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-8 bg-[#343232] p-6 rounded-xl font-bold text-lg">
            <div className="space-y-2">
              <div>
                <h2>3D</h2>
                <h2>Animation</h2>
              </div>
              <div className="text-sm font-light">
                <h3>Animation</h3>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-xl relative -top-10 left-10 bg-black ">
              <Image
                src={r_arrow}
                className="-rotate-45 hover:opacity-70"
                width={40}
                height={40}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-16 items-center font-bold text-2xl bg-[#343232] p-16 rounded-xl">
          <div className="space-y-12">
            <div>
              <h2>3D Modeling</h2>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">141+</h2>
              <span className="text-lg font-light">Projects Completed</span>
            </div>
          </div>
          <div>
            <Image
              src={image1}
              width={250}
              height={300}
              alt="Studio Overview"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-row space-x-8 bg-[#343232] p-6 rounded-xl font-bold text-lg">
            <div className="space-y-2">
              <div>
                {" "}
                <h2>3D</h2>
                <h2>Visualization</h2>
              </div>
              <div className="text-sm font-light">
                <h3>Visulazation</h3>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-xl relative -top-9 left-10 bg-black ">
              <Image
                src={r_arrow}
                className="-rotate-45 hover:opacity-70"
                width={40}
                height={40}
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-8 bg-[#343232] p-6 rounded-xl font-bold text-lg">
            <div className="space-y-2">
              <div>
                <h2>VR/AR</h2>
                <h2>Development</h2>
              </div>
              <div className="text-sm font-light">
                <h3>Development</h3>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-xl relative -top-8 left-9 bg-black ">
              <Image
                src={r_arrow}
                className="-rotate-45 hover:opacity-70"
                width={40}
                height={40}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="w-1/2">
        You can create high-quality 3D models of objects, characters,
        environments, and more, for various industries such as gaming, film,
        architecture, product design, and more.
      </p>
    </div>
  );
};

export default Services;
