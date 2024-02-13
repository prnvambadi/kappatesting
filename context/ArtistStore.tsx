
"use client"
import { create } from 'zustand';

interface ArtistStore {
  selectedArtistId: string | null;
  setSelectedArtistId: (artistId: string | null) => void;
}

export const useArtistStore = create<ArtistStore>((set) => ({
  selectedArtistId: null,
  setSelectedArtistId: (artistId: string | null) => set({ selectedArtistId: artistId }),
}));
