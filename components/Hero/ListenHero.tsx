"use client";
import React, { useRef } from 'react'
import CustomButtonComponent from '../Button/CustomButton';
import Image from 'next/image';
import GsapScrollTrigger from '../GsapScrollTrigger/GsapScrollTrigger';

type Props = {}

const ListenBanner = (props: Props) => {

  const container=useRef(null)
  const xhigh=useRef(null)
  const high=useRef(null)
  const medium=useRef(null)
  const low=useRef(null)
  const xlow=useRef(null)
  return (
    <GsapScrollTrigger  containerRef={container}
    xhigh={xhigh}
    high={high}
    medium={medium}
    low={low}
    xlow={xlow}>
             <div ref={container}>
      <div   className="md:flex bg-slate-50 w-auto h-auto md:w-full">
        <div   className="bg-white h-96 md:h-[34rem] md:w-1/2 border-t-0 border-4 border-black relative ">
          <Image
            src="https://i.postimg.cc/yxtqRRgv/ivana-cajina-7-Lb-C5-J-jw4-unsplash.jpg"
            alt=""
            fill={true}
            className=" object-cover"
          />
          <div  className=" md:w-1/2 h-96   flex items-center p-10">
            <div ref={xlow}  className=" md:hidden absolute inset-0 flex flex-col  items-centeritems-center justify-center w-full h-full   ">
              <h1  className="title text-white absolute top-50 left-5  font-bold text-3xl ">
                Lorem ipsum
              </h1>
              <p   className="text-white absolute top-56 text-xs left-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, dicta, sit iste enim ullam, tempore eveniet dolorum
                nobis labore dolore corporis ut ipsa mollitia reprehenderit
                autem? Officia ipsum dolor provident?
              </p>
              <div  className='absolute bottom-5 left-5 '>
              <CustomButtonComponent   label="Go to Playlist" className="text-lg font-bold bg-transparent border-black border-2 m-4 pl-2 pr-2 pt-1 pb-1 absolute bottom-5 left-5  hover:bg-black text-white "/>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden md:block border-l-0 border-4 border-t-0 border-black md:w-1/2 h-96 md:h-[34rem]  items-center p-10">
          <div className=" items-center justify-center w-full h-full   relative ">
            <h1 ref={high} className="title text-gray-900 absolute top-10 left-5  font-bold text-4xl ">
              Lorem ipsum
            </h1>
            <p ref={low} className="text-gray-900 absolute top-20 text-xl left-5 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              dicta, sit iste enim ullam, tempore eveniet dolorum nobis labore
              dolore corporis ut ipsa mollitia reprehenderit autem? Officia
              ipsum dolor provident?
            </p>
             <button ref={medium} className="text-lg font-bold bg-transparent border-black border-2 m-4 pl-2 pr-2 pt-1 pb-1 absolute bottom-5 left-5 hover:text-white  hover:bg-black text-black ">
             GO TO PLATLIST
             </button>

            </div>
        </div>
      </div>
    </div>
    </GsapScrollTrigger>

  )
}

export default ListenBanner;
