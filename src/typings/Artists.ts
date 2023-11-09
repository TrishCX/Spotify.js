export interface TrackArtists {
  id?: string;
  name?: string;
  type?: string;
}
interface TopTracks {
  title?: string;
  id?: string;
  duration?: string;
  image?: string;
  type?: string;
}

interface Latest {
  id?: string;
  title?: string;
  type?: string;
  label?: string;
  image?: string;
}

export interface Artists {
  name?: string;
  biography?: string;
  headerImage?: string;
  profileImage?: string;
  gallery?: string[];
  topTracks?: TopTracks[];
  latest?: Latest;
}
