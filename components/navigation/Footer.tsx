"use client";
import Image from "next/image";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-black-800 text-white flex flex-col md:flex-row w-full h-1/4">
      {/* First Div */}
      <div className="box border-t-4 border-black md:border-black md:border-4 md:border-r-0 p-2 flex-1 flex flex-col items-center  md:mb-0">
        <div className="text-black py-6">
          <Image
            src="/footerwhite.svg"
            alt="FooterLogo"
            width={0}
            height={0}
            className=" w-[8rem] sm:w-[10rem]  bg-black"
          />
        </div>
      </div>

      {/* Second Div */}
      <div className="box border-t-4 border-black md:border-black md:border-4 p-10 md:p-4 flex-1 flex flex-col items-start  md:mb-0 md:border-r-0">
        <h3 className="text-2xl font-semibold mb-2 text-black">Most Popular</h3>
        <ul className="list-none p-0 m-0 text-black mt-2">
          <li className="mb-2 relative group  md:text-xl font-medium">Artist
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[3.2rem] bg-black opacity-0 group-hover:opacity-100 "></span></li>
          <li className="mb-2 relative group md:text-xl font-medium">Album
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[3.8rem] bg-black opacity-0 group-hover:opacity-100 "></span></li>
          <li className="mb-2 relative group md:text-xl font-medium">Track
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[3.3rem] bg-black opacity-0 group-hover:opacity-100 "></span> </li>
        </ul>
      </div>

      {/* Third Div */}
      <div className="box  border-t-4 border-black md:border-black md:border-4 p-10 md:p-4 flex-1 flex flex-col items-start  md:mb-0 text-black overflow-y-auto md:border-r-0">
        <h3 className="text-2xl font-semibold mb-2">Profiles</h3>
        <ul className="list-none p-0 m-0 mt-2">
          <li className="mb-2 relative inline-block group md:text-xl font-medium">
            Youtube
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black opacity-0 group-hover:opacity-100"></span>{" "}
          </li>
          <li className="mb-2 relative group md:text-xl font-medium">
            Spotify
            <span className="absolute inset-x-0 bottom-0 h-0.5 w-[4.2rem] bg-black opacity-0 group-hover:opacity-100 "></span>{" "}
          </li>
          <li className="mb-2 relative group md:text-xl font-medium">
            Instagram
            <span className="absolute inset-x-0 bottom-0 h-0.5 w-[6rem] bg-black opacity-0 group-hover:opacity-100 "></span>
          </li>

          <li className="mb-2 relative group md:text-xl font-medium">
            SoundCloud{" "}
            <span className="absolute inset-x-0 bottom-0 h-0.5 w-[7.4rem] bg-black opacity-0 group-hover:opacity-100 "></span>
          </li>
        </ul>
      </div>

      {/* Fourth Div */}
      <div className="box border-t-4 border-black md:border-black md:border-4 p-10 md:p-4 flex-1 flex flex-col items-start text-black ">
        <h3 className="text-2xl font-semibold mb-2 ">More</h3>
        <ul className="list-none p-0 m-0 mt-2">
          <li className="mb-2 relative group md:text-xl font-medium">Terms & Condition
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[11rem] bg-black opacity-0 group-hover:opacity-100 "></span></li>
          <li className="mb-2 relative group md:text-xl font-medium">Contact Us
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[6.8rem] bg-black opacity-0 group-hover:opacity-100 "></span></li>
          <li className="mb-2 relative group md:text-xl font-medium">About Us
          <span className="absolute inset-x-0 bottom-0 h-0.5 w-[5.5rem] bg-black opacity-0 group-hover:opacity-100 "></span></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
