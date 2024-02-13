"use client";
import React, { useEffect, useState } from 'react';
import ShortCutButton from "@/components/navigation/ShortCut";
import { useArtistStore } from '@/context/ArtistStore';
import { ArtistDetail } from '@/schemas/showCaseItem';
import { getArtistsDetails } from '@/actions/getShowCaseItem';



const ShortcutList: React.FC = () => {
  const { selectedArtistId, setSelectedArtistId } = useArtistStore();
  const [loadedArtists, setLoadedArtists] = useState<ArtistDetail[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistDetails = await getArtistsDetails(10);
        setLoadedArtists(artistDetails);
      
       
      } catch (error) {
        console.error('Error fetching artist details:', error);
      }
    };

    fetchArtists();
  }, []);

  const handleArtistClick = (artistId: string | null) => {
    setSelectedArtistId(artistId);
  };

  console.log("Loaded Artists" ,loadedArtists)

  return (
    <div className="justify-center flex h-50 w-full mt-4">
     {loadedArtists.length > 0 && (
        loadedArtists.map((artist) => (
          <ShortCutButton
            key={artist.id}
            label={artist.name}
            textcolor="black"
            background="black"
            hovertextcolor="white"
            border="black"
            onClick={() => handleArtistClick(artist.id)}
          />
        ))
      )}
    </div>
  );
};

export default ShortcutList;
