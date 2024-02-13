"use client"
import React from "react";
import { VideoCardItem } from "@/components/CardComponents/VideoCard/VideoCardItem";
import Image from "next/image";
import Link from "next/link";
import { Carousel2 } from "@/components/Slides/Carousel2";
import ShortCutButton from "@/components/navigation/ShortCut";
import { useBackgroundStore } from "@/context/BackgroundContext";

interface Prop {
  videoId: number;
  index: number;
}

export default function DetailedWatchPage({ videoId, index }: Prop) {

  const { blur } = useBackgroundStore();
  return (
     <div className={`${blur ? "blur-lg" : ""}`}>
        {videoId}
      <div className="main  container mx-auto md:mb-16 mb-8">
        <div  className=" sm:my-4">
          {/* {params.videoId} */}
          <iframe
            src="https://www.youtube.com/embed/d8VKMKQjTMY?si=yhU4_Mnj0h5FpwEx"
            title="YouTube video player"
            className="mx-auto w-full aspect-video"
            // w-full md:w-full lg:w-full h-[360px] md:h-[480px] lg:h-[600px]
            allowFullScreen
          ></iframe>
        </div>
        <div className="  ">
          <div  className="h-auto flex items-center justify-between  md:px-0 px-4">
            <h1 className="text-gray-700 font-bold text-3xl">Lorem ipsum</h1>
            <ShortCutButton label="SHARE" textcolor="black" background="black"  hovertextcolor="white" border="black" />
          </div>
          <div  className="grid md:grid-cols-5">
            <div className="md:col-span-3 md:px-0 px-4">
          <div className="w-full h-20 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black border-2 border-black">
                <Image
                  src="https://i.postimg.cc/yxtqRRgv/ivana-cajina-7-Lb-C5-J-jw4-unsplash.jpg"
                  alt=""
                  width={0}
                  height={0}
                  className=" w-full h-full "
                />
              </div>
              <h2 className=" ml-2 font-bold text-gray-700">ARTIST NAME</h2>
            </div>
            <div>
              <ShortCutButton label="ABOUT ARTIST NAME" textcolor="black" background="black"  hovertextcolor="white" border="black" />
            </div>
          </div>
          </div>

          <div className="md:col-span-2"></div>

          </div>
          <div  className="grid md:grid-cols-3 ">
            <div  className=" h-auto">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                labore corrupti veniam omnis deleniti, magni nesciunt aspernatur
                esse eos recusandae, fugit perferendis vero dolores eligendi,
                mollitia ullam adipisci eveniet odio!
              </p>
            </div>

            <div className="  h-20 relative md:col-span-2 flex items-center justify-center md:mt-9 ">
              <div className="items-center ">
              <div   className="flex  items-center  ">
              <ShortCutButton label="ALL" textcolor="black" background="black"  hovertextcolor="white" border="black" />
      <ShortCutButton label="ARTIST 01" textcolor="black" background="black"  hovertextcolor="white" border="black" />
      <ShortCutButton label="ARTIST 02" textcolor="black" background="black"  hovertextcolor="white" border="black" />
      <ShortCutButton label="POPULAR" textcolor="black" background="black"  hovertextcolor="white" border="black"  />
              </div>
              </div>
          </div>
          </div>
          </div>

      </div>
      <div className="border-t-4 border-x-4  border-black">
        <div className=" h-auto md:overflow-x-auto no-scrollbar overflow-hidden pb-9 ">
          <div className="">
            {/* <Carousel2
              title="More From Artist"
              slidesToShow={4}
              height="40rem"
              speed={7000}
              autoplaySpeed={7000}
            >
              {[1, 2, 3, 4, 5, 6].map((number,index) => (
                <div key={number} className="pr-4 relative">
                  <Link href={`/watch/${number}`}>
                  <VideoCardItem video={{ id: String(number) }} index={index} />
                    <div className="absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2">
              <Image
                src="/icons/youtube.png"
                alt=""
                width={0}
                height={0}
                className="md:w-full md:h-ful w-[4.2rem] h-[4.2rem] opacity-10"
              />
            </div>
                  </Link>
                </div>
              ))}
            </Carousel2> */}
          </div>
        </div>
      </div>
    </div>
  );
}
