import React from "react";
import { MusicCardItem } from "@/components/CardComponents/MusicCard/MusicCardItem";
import ShortCutButton from "@/components/navigation/ShortCut";

import ListenBanner from "@/components/Hero/ListenHero";
// import { useBackgroundStore } from "@/context/BackgroundContext";
function Listen() {

  // const { blur } = useBackgroundStore();
return (
  <div>


    <div className={`flex flex-col mx-auto`}
    >
    <ListenBanner/>
      <div  className="  justify-center flex h-50 w-full mt-4">
        <ShortCutButton label="ALL" textcolor="black" background="black" hovertextcolor="white" border="black" />
        <ShortCutButton label="ARTIST 01" textcolor="black" background="black" hovertextcolor="white" border="black" />
        <ShortCutButton label="ARTIST 02" textcolor="black" background="black" hovertextcolor="white" border="black" />
        <ShortCutButton label="POPULAR" textcolor="black" background="black" hovertextcolor="white" border="black" />
      </div>
      <div  className="p-4 m-2 items-center justify-center">
        <div>
          <h1 className="text-xl p-2 font-bold">ALL TRACKS</h1>
        </div>
        <div className="flex flex-wrap gap-4 p-6 justify-center items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <div
              key={number}
              className="w-auto h-auto md:w-w-[445px] hover:scale-105 transition duration-700 "
            >
              <MusicCardItem />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="  justify-center flex h-50 w-full mt-4 mb-10">
          <button  className=" text-xs font-bold m-4  border-black border-2 pl-2 pr-2 pt-1 pb-1 hover:bg-black hover:text-white ">
            LODE MORE
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Listen;
