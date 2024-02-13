"use client";
import React, { ReactNode, RefObject } from 'react'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
interface GsapScrollTriggerprops{

    children:ReactNode
    xhigh: RefObject<HTMLElement>;
    high: RefObject<HTMLElement>;
    medium: RefObject<HTMLElement>;
    low: RefObject<HTMLElement>;
    xlow: RefObject<HTMLElement>;
 containerRef:RefObject<HTMLElement>
}
const GsapScrollTrigger:React.FC<GsapScrollTriggerprops>=({  children,
    containerRef,
    xhigh,high,medium,low,xlow,
})=> {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top to bottom',
          end: 'bottom to top',
          scrub: true,
        },
      });

      tl.to(xhigh.current, { y: -400 }, 0);
      tl.to(high.current, { y: -300 }, 0);
      tl.to(medium.current, { y: -200 }, 0);
      tl.to(low.current, { y: -150 }, 0);
      tl.to(xlow.current, { y: -50 }, 0);
    });

    return () => context.revert();
  }, [containerRef, xhigh, high, medium, low, xlow]);
  return (
    <div>{children}</div>
  )
}

export default GsapScrollTrigger