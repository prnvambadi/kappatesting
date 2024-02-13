"use client";
import { CardItem } from "@/components/CardComponents/Card/CardItem";
import Hero from "@/components/Hero/Hero";
import { MusicCardItem } from "@/components/CardComponents/MusicCard/MusicCardItem";
import { Carousel } from "@/components/Slides/Carousel";
import { Carousel2 } from "@/components/Slides/Carousel2";
import { Carousel3 } from "@/components/Slides/Carousel3";
import { useBackgroundStore } from "@/context/BackgroundContext";
export default function Explore() {

  const { blur } = useBackgroundStore();
  return (
    <main  className={`${
        blur ? "blur-lg" : ""
      }`}>
      <div >
      <Hero/>
      </div>
      <div className="p-5" >
    <Carousel title="Shows" slidesToShow={2}  speed={5000} autoplaySpeed={5000}>
      {[1, 2, 3, 4, 5, 6].map((number) => (
          <div key={number} className="pr-4">
            <CardItem height="30rem" imgSrc="/images/Southside.png" title="SouthSide Vol:1" subtitle="SouthSideSubtitle"/>
          </div>
        ))}
      </Carousel>
      </div>
      
<div className="p-5" >
      <Carousel3 title="Events" slidesToShow={1}  speed={6000} autoplaySpeed={6000}>
      {[1, 2, 3, 4, 5, 6].map((number) => (
          <div key={number} className="pr-4 ">
            <CardItem height="80rem" imgSrc="/images/thumbnail-yt-fireflies.png" title="Frizzell d'souza" subtitle="Fireflies"/>
          </div>
        ))}
      </Carousel3>
      </div>
<div className="px-auto md:px-2">
      <Carousel2 title="Featured Artist" slidesToShow={3} height="40rem" speed={7000} autoplaySpeed={7000} autoPlay={false} MoreLink="listen">
      {[1, 2, 3, 4, 5, 6].map((number) => (
          <div key={number} className="pr-5   h-[12rem] ">
            <MusicCardItem/>
          </div>
        ))}
      </Carousel2>
      </div>
   
    </main>
 
  )
}
