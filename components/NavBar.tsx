"use client";

import React from "react";

import { nav_menu } from "@/constants";
import Link from "next/link";
import CustomButton from "./CustomButton";

interface CustomNavProps {
  url: string;
}

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-1 justify-center border-b  font-bold text-md p-3">
        <div className="flex flex-row w-3/4 justify-between items-center text-white bg-black p-1 rounded-full mb-3">
          <div className="border border-white/20 p-1 rounded-3xl bg-white/10 items-center m-2 hover:opacity-80">
            <h1 className="font-sans font-extrabold text-lg text-white text-center">
              3D_cIZMa_sTUDIo
            </h1>
          </div>
          <div className="flex flex-row justify-center space-x-20">
            {nav_menu.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className={`active:bg-white active:text-black p-1 pr-4 pl-4 rounded-full 
              }`}
                onClick={(e) => {
                  if (
                    "http://localhost:3000/" + item.link ==
                    e.currentTarget.href
                  ) {
                    console.log(e.currentTarget.href);
                  }
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <CustomButton
            title="Contact Us"
            containerStyles="text-white rounded-full text-black p-3 rounded-full border border-white active:bg-white active:text-black m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
