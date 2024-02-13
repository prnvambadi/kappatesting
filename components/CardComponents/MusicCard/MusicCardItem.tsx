"use client";
import { MdOutlineClose } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
interface SpotifyData {
  height?: number;
  html?: string;
  iframe_url?: string;
  provider_name?: string;
  provider_url?: string;
  thumbnail_height?: number;
  thumbnail_url?: string;
  thumbnail_width?: number;
  title?: string;
  type?: string;
  version?: string;
  width?: number;
}

interface MusicCardItemProps {
  number?: number;
  width?: string;
  height?: string;
}

export const MusicCardItem: React.FC<MusicCardItemProps> = ({
  number,
  width,
  height,
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://open.spotify.com/oembed?url=https%3A%2F%2Fopen.spotify.com%2Fepisode%2F7makk4oTQel546B0PZlDM5";

      try {
        const response = await axios.get<SpotifyData>(url);
        setSpotifyData(response.data);

      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchData();
  }, []);
  const data = spotifyData;
  return (
    <div className="">
      <div
        className="relative"
        onClick={() => setClicked(true)}
        onDoubleClick={() => setClicked(false)}
      >
        {clicked && (
          <div className="absolute top-0 left-0 z-10 w-full h-full ">
            <Card
              shadow={false}
              className={`relative flex flex-col h-[11rem] md:h-[12rem] items-end justify-center overflow-hidden text-center border-4 border-black rounded-none max-w-[24rem] min-h-[12rem] min-w-[22rem]`}
            >
              {/* top side with cover photo */}
              <div className="w-full h-1/2  border-black md:bg-white  relative  md:pb-2 md:pt-1 md:px-2 overflow-hidden p-1 ">
                {/* Insert your spotify track here */}
                <iframe
                  className="md:w-full md:h-auto h-full  w-full "


                  src={spotifyData?.iframe_url}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>

              {/* bottom side with track and artist information */}
              <div className="w-full h-1/2 flex flex-row  text-black items-center justify-center mx-auto">
              {spotifyData?.provider_name && (
                <Typography
                  variant="h6"
                  color="black"
                  className="md:font-s font-xs "
                >
                  FOLLOW ON
                </Typography>
              )}
                <div className="flex md:ml-5 ml-3">
                  <Link href="" className="md:m-3 mx-2 my-3">
                    <Image
                      src="/icons/instagram.png"
                      alt=""
                      width={0}
                      height={0}
                      className="md:w-10 md:h-10 w-7 h-7"
                    ></Image>
                  </Link>
                  <Link
                    href={spotifyData?.provider_url || ""}
                    className="md:m-3 mx-2 my-3"
                  >
                    <Image
                      src="/icons/spotify.png"
                      alt=""
                      width={0}
                      height={0}
                      className="md:w-10 md:h-10 w-7 h-7"
                    ></Image>
                  </Link>
                  <Link href="" className="md:m-3 mx-2 my-3">
                    <Image
                      src="/icons/audio.png"
                      alt=""
                      width={0}
                      height={0}
                      className="md:w-10 md:h-10 w-7 h-7"
                    ></Image>
                  </Link>
                  <div
                    className=" absolute bottom-0  right-0"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from propagating to the parent
                      setClicked(false); // Close the card
                    }}
                  >
                    <MdOutlineClose
                      size={40}
                      className="cursor-pointer absolute bottom-0  right-0"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <Card
          shadow={false}
          className={` relative flex flex-row h-[10rem] md:h-[12rem]  max-w-[24rem] min-h-[12rem] min-w-[22rem] items-end justify-center overflow-hidden text-center border-4 border-black rounded-none `}
        >
          {/* Left side with cover photo */}
          <div className="w-1/2 h-full  border-black relative overflow-hidden ">
            {/* Insert your cover photo here */}
            {spotifyData?.thumbnail_url && (
            <Image
              src={spotifyData.thumbnail_url ?? ""}
              alt="Album Cover"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
            )}
          </div>

          {/* Right side with track and artist information */}
          <div className="w-1/2 h-full flex flex-col justify-between bg-white text-black items-center align-center max-w-[12rem]">
            <div className="flex flex-col items-center p-2">
              {/* Track name */}
              {spotifyData?.provider_name && (
              <Typography
                variant="h2"
                color="black"
                className=" text-sm md:text-lg md:text-left"
              >
                {/* Your track name goes here */}
                {spotifyData?.title}
              </Typography>
              )}
              {spotifyData?.provider_name && (
              <Typography
                variant="h6"
                className="text-black font-medium "
              >
                {/* Your artist name goes here */}
                {spotifyData?.provider_name}
              </Typography>
              )}
              <Image
                      src="/icons/play-button.png"
                      alt=""
                      width={0}
                      height={0}
                      className="md:w-12 md:h-12 w-14 h-14 md:mt-3 mt-10 md:ml-20 ml-20 opacity-90"
                    ></Image>

            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
