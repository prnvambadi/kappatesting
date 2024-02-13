export interface VideoDetail {
    id: string;
    image: string;
    title: string;
    desc: string;
    youtube: string;
    spotify: string;
    album: string;
    artists: {
      id: string;
      image: string;
      name: string;
      url: string;
    }[];
  }