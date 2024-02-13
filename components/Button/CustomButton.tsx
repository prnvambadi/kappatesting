"use client";
import Link from 'next/link';
import React, { ButtonHTMLAttributes, useState } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

  label?: string | null;
  link?: string  ; 

}

const CustomButtonComponent: React.FC<CustomButtonProps> = ({ label = "Loading...", link="#" }) => {

  return (
    <Link href={link}>
      <button
        className={`border px-4 py-2 text-center font-bold text-white hover:text-white  hover:bg-black transition duration-300 ease-in-out  justify-items-center sm:text-sm md:text-2xl`}

      >
        {label}
      </button>
    </Link>
  );
};

export default CustomButtonComponent;
