
import instance from "@/Instance";
import getSongsList from "@/schemas/songsList";
import SpotifyListItems from "@/schemas/getSpotifyListen";
import SpotifyEmbed from "@/schemas/getSpotifyEmbeds";
import { ArtistDetail } from "@/schemas/showCaseItem";




interface getSpotifyListensParams {
  page?:number;
  artistId?:string;
}

interface GetListenItemsParams {
  artist?: boolean | null;
  album?: boolean | null;
  page:number;
}


// const getSongsLists = async (params: GetListenItemsParams) => {
//   try {
//     const apiUrl = "/api/web/v1/songs";
//      const queryParams = new URLSearchParams();

//     if(params.album !== null){
//       queryParams.append("album", String(params.album));
//     }

//     if (params.artist !== null){
//       queryParams.append("artist", String(params.artist));
//     }
//     queryParams.append("page", String(params.page));
//     queryParams.append("size", "5");

//     const fullUrl = apiUrl + (queryParams.toString() ? `?${queryParams.toString()}` : "");

//     return(await instance.get(fullUrl)).data as ArtistDetail[]
    
//   } catch (error) {
//     console.error("Error fetching listen items:", error);
//     return [] as ArtistDetail[];
//   }
// }

const getSongsLists = async(page : number) => {
  try {
    return(await instance.get(`/api/web/v1/songs?page=${page}&size=5`)).data as ArtistDetail[]
  } catch (error) {
    console.error("Error fetching listen items:", error);
    return [] as ArtistDetail[]
  }
}





const getSpotifyListens =  async (params:getSpotifyListensParams) => {

  const apiUrl = "/api/web/v1/spotify/listens";
  
  const queryParams = new URLSearchParams();

  if(params.page !== undefined) {
    queryParams.append("page", String(params.page));

  }
  if (params.artistId !== undefined) {
    queryParams.append("artistId", String(params.artistId));
  }

  const fullUrl = apiUrl + (queryParams.toString() ? `?${queryParams.toString()}` : "");


    try {
      return (await instance.get(fullUrl)).data as SpotifyListItems[]
    } catch (error) {
      console.error("Error fetching Spotify listens:", error);
      return [] as SpotifyListItems[]
    }
}

const getSpotifyOEmbeds = async(url : string) => {
    try {
      return (await instance.get(`/api/web/v1/spotify/oembed/${url}`)).data as SpotifyEmbed
    } catch (error) {
      console.error("Error fetching Spotify OEmbed details :", error);
      return {} as SpotifyEmbed
    }
}





export {getSongsLists,getSpotifyListens,getSpotifyOEmbeds}


