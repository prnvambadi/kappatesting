"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader } from "@material-tailwind/react";
import { getVideoDetails } from "@/actions/getVideoApi";
import { VideoDetail } from "@/schemas/videoDetails";
import { videoItems } from "@/schemas/videos";
import Image from 'next/image';
import { MotionDiv } from '@/components/MotionDiv';
import Link from "next/link";
interface Prop {
  video : videoItems;
  index:number;

}

export const VideoCardItem = ({ video,index}:Prop) => {

const trackId = video.id as string;

  const [isHovered, setIsHovered] = useState(false);
  const [videoDetail, setvideoDetail] = useState<VideoDetail|null>(null)

console.log(video.link);

  return (
     <Link href={`/watch/${video.id}`}>
    <Card
      className="w-auto md:h-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader color="blue-gray" className="relative h-[14rem]  sm:h-[18rem]  md:h-[10rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem]  border-4 border-black justify-center  mt-4">
      {/* <div className=' '>  <Image src={`data:image/png;base64,${video.image}`} alt='' fill  className='relative'/> </div> */}

        <iframe
        className={`w-full aspect-video  h-[14rem] sm:h-[18rem] md:h-[10rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[16rem]`}
        src={`${video.link}=${isHovered ?'&autoplay=1' :'&autoplay=0'}&mute=1`}
          title={`${videoDetail?.title}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
        <div className="flex items-center justify-center absolute inset-0 ">
        {/* absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 */}
              <Image
                src="/icons/youtube.png"
                alt=""
                width={0}
                height={0}
                className="  w-[4.2rem] h-[4.2rem] opacity-10"
              />
            </div>
      </CardHeader>
    </Card>
    </Link>

  );
};
//Things to do
// the youtube link from the cms is not in the iframe format :   https://www.youtube.com/watch?v=g5KkIFCYKyo , it should be in the format https://www.youtube.com/embed/uJaT10y6V20 and pass this as src prop and fix the on hover youtube preview mode
