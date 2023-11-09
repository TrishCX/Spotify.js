import { request } from "../request";
import { getAccessToken } from "./getAccessToken";
import type { Albums } from "../typings";
import { getMSToDuration } from "../helpers";

export async function getAlbums(id: string): Promise<Albums> {
  const { accessToken } = await getAccessToken();
  const response = await request.get(
    `https://api-partner.spotify.com/pathfinder/v1/query?operationName=getAlbum&variables=%7B%22uri%22%3A%22spotify%3Aalbum%3A${id}%22%2C%22locale%22%3A%22%22%2C%22offset%22%3A0%2C%22limit%22%3A50%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2246ae954ef2d2fe7732b4b2b4022157b2e18b7ea84f70591ceb164e4de1b5d5d3%22%7D%7D`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const album = response?.data?.albumUnion;
  const name = album?.name;
  const artists = album?.artists?.items;
  const date = new Date(album?.date?.isoString).toLocaleDateString();
  const image = album?.coverArt?.sources[0]?.url;
  const tracks: any[] = [];
  album?.tracks?.items?.map(({ track }: any, _: number) =>
    tracks.push({
      title: track?.name,
      playCount: track?.playcount,
      duration: getMSToDuration(track?.duration?.totalMilliseconds),
    })
  );
  return {
    name,
    artists,
    date,
    id,
    image,
    tracks,
  };
}
