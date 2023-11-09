import { Albums, Artists, Lyrics, Playlist, Track } from "./typings/index";

declare namespace Spotify {
  export function getAlbums(id: string): Promise<Albums>;
  export function getArtists(id: string): Promise<Artists>;
  export function getPlaylist(id: string): Promise<Playlist>;
  export function getTrack(id: string): Promise<Track>;
  export function getSyncedLyrics(id: string): Promise<Lyrics>;
}

export default Spotify;
export * from "./typings/index";
export {
  getAlbums,
  getPlaylist,
  getArtists,
  getTrack,
  getSyncedLyrics,
} from "./functions/index";
