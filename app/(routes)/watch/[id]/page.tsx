
import { VideoCardItem } from "@/components/CardComponents/VideoCard/VideoCardItem";
import { Carousel2 } from "@/components/Slides/Carousel2";
import ShortCutButton from "@/components/navigation/ShortCut";
import Suggestion from "@/schemas/getVideoSuggestions";
import { VideoDetail } from "@/schemas/videoDetails";
import Image from "next/image";


async function getDetailedWatchPage(id: string): Promise<VideoDetail> {
  try {
    const fetchData = await fetch(
      `http://13.201.110.253:8669/api/web/v1/song/watch/${id}`
    );
    const videoDetails = await fetchData.json();
    return videoDetails as VideoDetail;
  } catch (error) {
    console.error("Error fetching video details:", error);
    return {} as VideoDetail;
  }
}

async function getSuggestions(trackId: string) {
  try {
    const fetchData = await fetch(
      `http://13.201.110.253:8669/api/web/v1/song/watch/suggestions/${trackId}?limit=6`
    );
    const suggestions = await fetchData.json();
    return suggestions as Suggestion[];
  } catch (error) {
    return [] as Suggestion[];
  }
}

export default async function DetailedWatchPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const data = await getDetailedWatchPage(id);

  const suggestiondata = await getSuggestions(id);
console.log(data.spotify);

  return (
    <div className={``}>
      <div className="">
        <div className="container mx-auto sm:my-4">
          <iframe

            src={`${data.youtube}`}
            title="YouTube video player"
            className="mx-auto w-full md:w-full lg:w-full h-[360px] md:h-[480px] lg:h-[600px]"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" mx-5 md:mx-5 lg:mx-7 my-8 ">
          <div className="h-auto mx-1 md:mx-3 flex items-center justify-between ">
            <h1 className="text-gray-700 font-bold text-3xl">{data.title}</h1>
            <button className="text-xs lg:text-lg lg:px-4 font-bold border-black border pl-2 pr-2 pt-1 pb-1  text-black  hover:bg-black hover:text-white">
              SHARE
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5">
            <div className="col-span-1 md:col-span-2 md:px-0 px-4">
              <div className="w-full h-20 flex md:justify-between items-center ">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black border-2 border-black">
                    <Image
                      src={
                        data.artists && data.artists.length > 0
                          ? `data:image/png;base64,${data.artists[0].image}`
                          : ""
                      }
                      alt=""
                      width={0}
                      height={0}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <h2 className=" ml-4 font-bold text-gray-700 ">
                      {" "}
                      {data.artists && data.artists.length > 0
                        ? data.artists[0].name
                        : "Loading..."}
                    </h2>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-span-1 flex items-center justify-end'>
              <div className='flex md:justify-center justify-end items-center'>

                  <ShortCutButton
                    label={`About ${
                      data.artists && data.artists.length > 0
                        ? data.artists[0].name
                        : "Loading..."
                    }`}
                    textcolor="black"
                    background="black"
                    hovertextcolor="white"
                    border="black"
                    link={
                      data.artists && data.artists.length > 0
                        ? data.artists[0].url
                        : "#"
                    }
                  />
                  </div>
                </div>
            <div className="md:col-span-2 "></div>
          </div>

          <div className="md:mx-auto my-5 md:flex">
            <div className="md:w-1/2 p-3  h-auto">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                labore corrupti veniam omnis deleniti, magni nesciunt aspernatur
                esse eos recusandae, fugit perferendis vero dolores eligendi,
                mollitia ullam adipisci eveniet odio!
              </p>
            </div>
            <div className="md:w-1/2 w-full md:pr-0 h-20 relative">
              <div className="flex md-py-5 justify-center md:absolute right-0 top-0">
                {data.artists &&
                  data.artists
                    .slice(1)
                    .map((artist, index) => (
                      <ShortCutButton
                        key={index}
                        label={artist.name}
                        textcolor="black"
                        background="black"
                        hovertextcolor="white"
                        border="black"
                        link={artist.url}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-4 border-l-4 border-r-4 border-black">
        <div className="md:fl h-auto md:overflow-x-auto no-scrollbar">
          <div className="">
            <Carousel2
              title="More From Artist"
              slidesToShow={4}
              height="40rem"
              speed={7000}
              autoplaySpeed={7000}
            >
              {suggestiondata.map((suggestion, index) => (
                <div key={suggestion.id} className="pr-4 relative">
                  <VideoCardItem video={suggestion} index={index} />
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/icons/youtube.png"
                      alt=""
                      width={0}
                      height={0}
                      className="md:w-full md:h-ful w-[4.2rem] h-[4.2rem] opacity-10"
                    />
                  </div> */}
                </div>
              ))}
            </Carousel2>
          </div>
        </div>
      </div>
    </div>
  );
}
//  Things to do.....
//check the videoCardItem

//The Suggestions Section is not responsive , i mean the carousel , if the items are less than 3 , it is vertically placed on above another . best way is to set a minimum and maxumum space  so that it will be in horizontal

//Center About Artist button : when it clicks it should navigate to the spotify url.

//please check the youtube url and add the embed url src .
