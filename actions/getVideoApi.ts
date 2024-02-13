
import instance from "@/Instance";
import { VideoDetail } from "@/schemas/videoDetails";
import {  videoItems} from "@/schemas/videos"
import Suggestion from "@/schemas/getVideoSuggestions";






  const getVideoDetails = async(trackId : string) => {
    try {

        return (await instance.get(`/api/web/v1/song/watch/${trackId}`)).data as VideoDetail
    } catch (error) {
        return {} as VideoDetail;
    }
  }




const getVideosItems = async (page:number,artistId?:string) => {
    try {
      if(artistId) {
        return (await instance.get(`/api/web/v1/youtube/watches?page=${page}&size=1&artistId=${artistId}`)).data as videoItems[]
      } else {
        return (await instance.get(`/api/web/v1/youtube/watches?page=${page}&size=3`)).data as videoItems[]
      }
    } catch (error) {
   console.log(`Error fetching videos Items`, error);
   return [] as videoItems[];
    }
}



const getvideoSuggestions =  async (trackId:string) => {
    try {
      return (await instance.get(`/api/web/v1/song/watch/suggestions/${trackId}?limit=8`)).data as Suggestion[]
    } catch (error) {
      console.log("Get Suggestions error",error);
      return [] as Suggestion[];
    }
  }
  

  export {getVideoDetails,getVideosItems,getvideoSuggestions}