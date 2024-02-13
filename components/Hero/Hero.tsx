"use client"
import React, { useEffect, useRef, useState } from 'react';
import ShortCutButton from '../navigation/ShortCut';
import CustomButtonComponent from '../Button/CustomButton';
import GsapScrollTrigger from '../GsapScrollTrigger/GsapScrollTrigger';
import { Banner } from '@/schemas/banner';
import instance from '@/Instance';

let HeroUrl = '/herobanner.jpg';

const Hero = () => {
  const [bannerDatas, setBannerDatas] = useState<Banner | null>(null);
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await instance.get('/api/web/v1/banner');
        setBannerDatas(response.data);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData();
  }, []);



  const { name, desc, label, link, image, primaryColour, secondaryColour, accentColour } =
    bannerDatas || {};

  const imageUrl = image ? `data:image/jpeg;base64,${image}` : HeroUrl;

  const container = useRef(null);
  const xhigh = useRef(null);
  const high = useRef(null);
  const medium = useRef(null);
  const low = useRef(null);
  const xlow = useRef(null);

  return (
    <GsapScrollTrigger
      containerRef={container}
      xhigh={xhigh}
      high={high}
      medium={medium}
      low={low}
      xlow={xlow}
    >

    <div ref={container}
      className={`relative h-screen transition-all duration-300 `}
    >

    <div className="absolute top-0 left-0 w-full h-full mb-8 md:mb-12 lg:mb-16 xl:mb-20">
  <video autoPlay muted playsInline loop src="/video/herovideo.mp4" className="hidden md:block w-full h-full object-cover"  />
  <video autoPlay muted playsInline loop src="/video/herovideo2.mp4" className="md:hidden w-full h-full object-cover"  />
</div>



      <div className="relative h-screen  justify-items-between items-start">
      <div ref={xhigh} className="justify-center flex w-full pt-4">
      <ShortCutButton label="ALL" textcolor="white" background="white" rounded hovertextcolor="black" border="white"/>
      <ShortCutButton label="ARTIST 01" textcolor="white" background="white" rounded hovertextcolor="black" border="white"/>
      <ShortCutButton label="ARTIST 02" textcolor="white" background="white" rounded  hovertextcolor="black" border="white"/>
      <ShortCutButton label="POPULAR" textcolor="white" background="white" rounded  hovertextcolor="black" border="white"/>
</div>
        <div className="lg:container-lg md:container-md">
        <div className="justify-items-center h-full">
  <div className=" text-white  md:absolute top-40 left-20 mt-20 md:mt-0">
    <h1 ref={medium} className={` text-center md:text-left text-4xl font-bold mb-4 md:text-6xl whitespace-normal`}>{name}</h1>
    <p
        ref={low}
        className={`text-xl text-center md:text-left sm:text-center md:text-2xl  `}
      >
{desc}      </p>  </div>
</div>

<div className="">
    <div ref={high} className="flex justify-center pt-[20rem] md:text-left md:absolute md:bottom-40 md:right-32 ">
      <CustomButtonComponent label={label} link={link} />
    </div>
  </div>
      </div>
      </div>
    </div>
    </GsapScrollTrigger>
  );
};

export default Hero;
