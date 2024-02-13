"use client";
import React, { useEffect, useState, useCallback } from "react";
import ShowCaseItem from "@/components/ShowCase/ShowCaseItem";
import { ArtistDetail } from "@/schemas/showCaseItem";
import { MotionDiv } from "../MotionDiv";
import { useInView } from "react-intersection-observer";
import { getSongsLists } from "@/actions/getSongsApi";

interface Props {

}
let pageCount=1

const ShowcaseItemsList: React.FC<Props> = ({  }) => {
  const [items, setItems] = useState<ArtistDetail[]>([]);
  const [page, setPage] = useState(pageCount);
  const { ref, inView } = useInView();

 useEffect(() => {
  const fetchData = async () => {
    if(inView){
      try {
        const data = await getSongsLists(page);
        setItems((prevItems) => [...prevItems,...data]);
        setPage((prevpage) => prevpage+1);
        console.log(page);
      } catch (error) {
        console.log("Error fetching showcaseList",error)
      }
    }
  }
  fetchData();

 },[inView]);


 const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
  
  return (
    <div>
    <MotionDiv
    className="md:columns-3 sm:columns-2 columns-1 pr-2 pl-2"
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    {items.map((item: ArtistDetail, index: number) => (
      <MotionDiv
        key={item.id}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: index * 0.2, // Adjust the delay as needed
        }}
      >
        <ShowCaseItem showcase={item} index={index} />
      </MotionDiv>
    ))}
  
  </MotionDiv>
    <div className="justify-center flex h-50 w-full mt-4 mb-10">
      <button
        ref={ref}
        className="text-xs font-bold m-4 border-black border-2 pl-2 pr-2 pt-1 pb-1 hover:bg-black hover:text-white"
      >
        LOAD MORE
      </button>
    </div>
    </div>

  );
      }

export default ShowcaseItemsList
