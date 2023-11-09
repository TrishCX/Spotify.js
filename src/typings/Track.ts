import type { TrackArtists } from "./Artists";
import type { TrackAlbum } from "./TrackAlbum";

export interface Track {
  id?: string;
  title?: string;
  type?: string;
  duration?: string;
  artists?: TrackArtists[];
  album?: TrackAlbum;
}
