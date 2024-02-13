"use client";
import Link from 'next/link';
import React from 'react';

interface CustomButtonProps {
  label: string;
  textcolor: string;
  rounded?:boolean;
  background:string;
hovertextcolor:string;
border:string
link?: string;
onClick?: () => void; 
}


const ShortCutButton: React.FC<CustomButtonProps> = ({ label,textcolor,rounded,background,hovertextcolor,border,link ,  onClick,}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
   
<button onClick={handleClick}
      className={`text-xs lg:text-lg lg:px-2 font-bold m-2 md:m-4 pl-2 pr-2 pt-1 pb-1 border-2 border-${border} text-${textcolor} ${
        rounded ? 'rounded-full' : 'none' 
      }  hover:border-white  hover:text-${hovertextcolor} hover:border-1 hover:bg-${background} transition duration-300 ease-in-out`}
    >      {label}
    </button>


  );
};

export default ShortCutButton;
