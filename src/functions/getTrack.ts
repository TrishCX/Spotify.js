import { getAccessToken } from "./getAccessToken";
import { request } from "../request";
// @interfaces
import { Track } from "../typings";
import { getMSToDuration } from "../helpers";

export async function getTrack(id: string): Promise<Track> {
  if (!id) throw Error("Specify a track id");
  const { accessToken } = await getAccessToken();
  const response = await request.get(
    `https://api.spotify.com/v1/tracks/${id}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const track: Track = {
    id: response?.id,
    album: {
      id: response?.album?.id,
      name: response?.album?.name,
      image: response?.album?.images[0]?.url,
      date: response?.album?.release_date,
      artists: response?.album?.artists,
      tracksLength: response?.album?.total_tracks,
    },
    duration: getMSToDuration(response?.duration_ms),
    artists: response?.artists.map((artist: any) => ({
      name: artist?.name,
      id: artist.id,
      type: artist?.type,
    })),
    title: response?.name,
    type: response?.type,
  };
  return track;
}
