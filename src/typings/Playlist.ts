interface Artists {
  uri?: string;
  profile?: { name?: string };
}
interface Album {
  title?: string;
  image?: string;
  artists?: Artists;
}
interface Track {
  title?: string;
  duration?: string;
  playCount?: string;
  album?: Album;
}
interface Owner {
  name?: string;
  image?: string;
}
export interface Playlist {
  name?: string;
  description?: string;
  image?: string;
  owner?: Owner;
  totalTracks?: number | string;
  tracks?: Track[];
}
