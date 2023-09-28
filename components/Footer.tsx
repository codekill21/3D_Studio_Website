import { footer_menu } from "@/constants";
import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center self-center p-4">
      {/**uppper div of the whole footer, flex is column */}
      <div className="flex flex-row items-center space-x-24">
        <div className="font-bold text-4xl w-96 space-y-4">
          <div className="border border-black p-2 w-3/4 rounded-3xl bg-black/20 items-center cursor-pointer">
            <h1 className="font-sans font-extrabold text-3xl text-black text-center">
              3D_cIZMa_sTUDIo
            </h1>
          </div>
          <h1>Let's Start With us for happy projects</h1>
        </div>
        <div className="flex flex-row space-x-48">
          {footer_menu.map((item) => (
            <div className="flex flex-col  m-2">
              <h1 className="font-bold text-lg">{item.title}</h1>
              {item.menu_items.map((section_item) => (
                <Link href={section_item.link}>{section_item.title}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <CustomButton
        title="Talk to us"
        containerStyles="w-full bg-black text-white text-sm p-4 text-center rounded-full font-semibold m-2"
      />
      <div className="m-4 text-opacity-60 text-sm">
        <h1>
          &copy; 2023 3D_cIZMa_sTUDIo, by{" "}
          <a className="underline" href="https://github.com/codekill21">
            Codekill
          </a>
          . All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
