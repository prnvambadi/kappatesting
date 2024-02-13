"use client";
import { useRef } from 'react';
import Image from 'next/image';

interface WatchProps {
  projects: any[];
  reversed?: boolean;
}


const WatchItem: React.FC<WatchProps> = ({ projects, reversed }) => {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    // Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    // Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }

    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      if (requestAnimationFrameId !== null) {
        window.cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={(e) => manageMouseMove(e)} className="flex mt-10vh h-45vw">
      <div ref={firstImage} className="w-2/3">
        <div className="pb-[66%] relative">
          <Image src={`/images/${projects[0].src}`} fill={true} alt="image" />
        </div>
        <div className="text-base p-10">
          <h3 className="text-lg mb-5 mt-0 font-normal">{projects[0].name}</h3>
          <p className="text-base m-0">{projects[0].description}</p>
          <p className="text-base m-0 text-gray-500">{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className="w-1/3">
        <div className="pb-[66%] relative">
          <Image src={`/images/${projects[1].src}`} fill={true} alt="image" />
        </div>
        <div className="text-base p-10">
          <h3 className="text-lg mb-5 mt-0 font-normal">{projects[1].name}</h3>
          <p className="text-base m-0">{projects[1].description}</p>
          <p className="text-base m-0 text-gray-500">{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchItem;
