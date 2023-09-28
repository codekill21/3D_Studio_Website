import React from "react";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button className={containerStyles} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
