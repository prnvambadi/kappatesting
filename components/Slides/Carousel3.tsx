"use client";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ReactNode, useEffect, useState } from "react";
import Link from "next/link";
interface CarouselProps {
  title? : string;
  width?:string;
  height?:string;
  slidesToShow?: number; 
  speed?:number;
  autoplaySpeed?:number;
  children:ReactNode;
  autoPlay?:boolean;
  MoreLink?:string;
}
export const Carousel3:React.FC<CarouselProps> = ({title,width,height, slidesToShow = 2,speed,autoplaySpeed,children,autoPlay,MoreLink}) => {
  const [addValue, setAddValue] = useState(0);

  useEffect(() => {
    // Update slidesToShow based on the screen size
    const updateSlidesToShow = () => {
      setAddValue(window.innerWidth >= 1200 ? 1 : 0);
    };

    // Initial update
    updateSlidesToShow();

    // Event listener for screen size changes
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow:  slidesToShow+addValue,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
    rtl: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
   
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="p-1 md:p-10 ">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <Link href={`/${MoreLink}`}>
      <button className="border-4 border-black px-2 hover:text-white hover:bg-black font-medium ">See All</button>
      </Link>
      </div>
      <div className="px-2 lg:p-5 md:p-20 lg:px-14 md:px-10">
      <Slider {...settings}>
        {children}
        </Slider>
      </div> 
    </div>
  );
}