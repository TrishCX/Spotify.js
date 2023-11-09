import { TrackArtists } from "./Artists";

export interface TrackAlbum {
  id?: string;
  name?: string;
  artists?: TrackArtists[];
  image?: string;
  date?: string;
  tracksLength?: number;
}
