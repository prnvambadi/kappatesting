"use client";
import React, { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArtistDetail } from "@/schemas/showCaseItem";
import { MotionDiv } from "../MotionDiv";


interface Prop {
  showcase : ArtistDetail;
  index:number
}
const ShowCaseItem = ({showcase,index }: Prop) => {


  const imageUrl = showcase.image ? `data:image/jpeg;base64,${showcase.image}` : '';

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
  };
  


  useEffect(() => {
    const parallaxIt = (e: MouseEvent) => {
      const $this = imageRef.current;
      const container = containerRef.current;

      if (!$this || !container) return;

      const rect = $this.getBoundingClientRect();
     const containerX = rect.left;
      const containerY = rect.top;
      const relX = e.clientX - containerX;
      const relY = e.clientY - containerY;

      const scaleFactor = 0.5;


      const x = ((relX - rect.width / 2) / rect.width) * -40 * scaleFactor;
      const y = ((relY - rect.height / 2) / rect.height) * -40 * scaleFactor;

      gsap.to($this, {
        duration: 1,
        x,
        y,
      });
    };

    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.addEventListener("mousemove", parallaxIt);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mousemove", parallaxIt);
      }
    };
  }, [containerRef, imageRef]);

  const isLeftItem = index % 2 !== 0;  

  const [isHovered, setIsHovered] = useState(false);



  return (
    <MotionDiv variants={variants} initial="hidden" animate="visible" 
    transition={{delay:index*0.25,ease:"easeInOut",duration:0.5}} viewport={{amount:0}}>
    <Link href={`/watch/${showcase.id}`}>
           <div
      ref={containerRef}
      className={`w-full aspect-auto md:mt-4 sm:mt-4 my-10 ${
        isLeftItem ? "pl-6 pr-0 sm-p-0 md:pl-0" : "pr-6 pl-0 sm:p-0 md:pr-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={imageRef} className="relative hover:border-black hover:border-8">
      <Image
                src={imageUrl}
                alt=""
                width={0}
                height={0}
                className="w-full h-full "
              />
      </div>
    </div>
    </Link>

    </MotionDiv>

  );
};

export default ShowCaseItem;

