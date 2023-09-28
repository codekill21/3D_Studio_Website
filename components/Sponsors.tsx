import { partners } from "@/constants";
import React from "react";
import {
  netflix,
  hulu,
  sony,
  google,
  discord,
  android,
  autodesk,
  sketchfab,
  disney,
} from "@/public/assets";

import Image from "next/image";

const Sponsors = () => {
  return (
    <div
      id="partners"
      className="flex flex-col items-center space-y-16  border-t border-b-2 p-12 "
    >
      <div className="flex flex-row justify-between space-x-72">
        <Image src={netflix} width={100} height={100} alt="netflix" />
        <Image src={hulu} width={100} height={100} alt="netflix" />
        <Image src={disney} width={100} height={100} alt="netflix" />
        <Image src={sony} width={100} height={100} alt="netflix" />
      </div>
      <div className="flex flex-row justify-between space-x-36">
        <Image src={google} width={100} height={100} alt="netflix" />
        <Image src={android} width={100} height={100} alt="netflix" />
        <Image src={sketchfab} width={100} height={100} alt="netflix" />
      </div>
      <div className="flex flex-row justify-between space-x-24">
        <Image src={autodesk} width={100} height={100} alt="netflix" />
        <Image src={discord} width={100} height={100} alt="netflix" />
      </div>
    </div>
  );
};

export default Sponsors;
