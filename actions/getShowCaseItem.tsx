

import instance from "@/Instance";
import { ArtistDetail } from "@/schemas/showCaseItem";

const getArtistsDetails = async (page: number): Promise<ArtistDetail[]> => {
  try {
    return (await instance.get(`/api/web/v1/artists?limit=${page}`)).data as ArtistDetail[];
  } catch (error) {
    console.error('Error fetching showcase items:', error);
    return [] as ArtistDetail[];
}
}

export {getArtistsDetails}