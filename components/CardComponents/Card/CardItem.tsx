"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import Image from "next/image";

  interface CardProps {
  width?: string; 
  height: string;
  imgSrc:string;
  title?:string;
  subtitle?:string;
 
}
  export const CardItem:React.FC<CardProps> = ({ width, height,imgSrc,title,subtitle}) => {
   

    return (
      <Card
        shadow={false}
        className={`relative grid h-[${height}] md:h-[30rem]  max-w-4xl items-end justify-center overflow-hidden text-center`}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        >
          <Image
          src={imgSrc}
          alt="cardimage"
          fill
          objectFit="cover"
          className="object-cover"
        />          
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            color="white"
            className="mb-6 text-3xl md:text-6xl "
          >
         
            {title}
          </Typography>
          <Typography  className="mb-4 text-gray-300 text-xl md:text-3xl">
         
            {subtitle}
          </Typography>
        </CardBody>
      </Card>
    );
  }