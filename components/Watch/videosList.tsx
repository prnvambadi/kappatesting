"use client";
import React, { useEffect, useState } from "react";
import { VideoCardItem } from "../CardComponents/VideoCard/VideoCardItem";
import { videoItems } from "@/schemas/videos";
import Link from "next/link";
import { getVideosItems } from "@/actions/getVideoApi";
import { MotionDiv } from "../MotionDiv";
import { useInView } from "react-intersection-observer";
import { useArtistStore } from "@/context/ArtistStore";

const WatchList: React.FC = () => {
const [items, setItems] = useState<videoItems[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();
  const { selectedArtistId } = useArtistStore();
  useEffect(() => {
    const fetchData = async () => {
      if (inView) {
        try {
          let data: videoItems[];
    
          if (selectedArtistId) {
            data = await getVideosItems(page, selectedArtistId);
          } else {
            data = await getVideosItems(page);
          }
    
          setItems((prevItems) => [...prevItems, ...data]);
          setPage((prevPage) => prevPage + 1);
        } catch (error) {
          console.error("Error fetching video items:", error);
        }
      }
    };
    fetchData();
  }, [inView,selectedArtistId]);

const variants = {
  hidden : {opacity : 0},
  visible : {opacity : 1}
};
  return(
    <div>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:grid-cols-4 gap-y-4 sm:p-4 p-2">
      {items.map((item, index) => (
        <Link key={index} href={`/watch/${item.id}`}>
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
            viewport={{ amount: 0 }}
          >
            <VideoCardItem key={item.id} video={item} index={index} />
          </MotionDiv>
        </Link>
      ))}
    </div>
    <div className="justify-center flex h-50 w-full mt-4 mb-10">
      <button
        ref={ref}
        className="text-xs font-bold m-4 border-black border-2 pl-2 pr-2 pt-1 pb-1 hover:bg-black hover:text-white"
      >
        LOAD MORE
      </button>
    </div>
  </div>
  )
}
export default WatchList;


