import { getAccessToken } from "./getAccessToken";
import { request } from "../request";
import { getMSToDuration } from "../helpers";
import type { Playlist } from "../typings";
export async function getPlaylist(id: string): Promise<Playlist> {
  const { accessToken } = await getAccessToken();
  const response = await request.get(
    `https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchPlaylist&variables=%7B%22uri%22%3A%22spotify%3Aplaylist%3A${id}%22%2C%22offset%22%3A0%2C%22limit%22%3A25%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2273a3b3470804983e4d55d83cd6cc99715019228fd999d51429cc69473a18789d%22%7D%7D`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = response.data;
  const playlist = data?.playlistV2;
  const name = playlist?.name;
  const description = playlist?.description;
  const image = playlist.images.items[0]?.sources[0]?.url;
  const likes = playlist?.followers;
  const _owner = playlist?.ownerV2?.data;
  const owner = {
    name: _owner?.name,
    image: _owner?.avatar?.sources[0]?.url,
  };
  const content = playlist?.content;
  const totalTracks = content?.totalCount;
  const tracks: any[] = [];
  content?.items.map((res: any, _: number) => {
    const track = res?.itemV2?.data;
    const album = track?.albumOfTrack;
    tracks.push({
      title: track?.name,
      duration: getMSToDuration(track?.trackDuration?.totalMilliseconds),
      playCount: track?.playcount,
      album: {
        title: track?.albumOfTrack?.name,
        artists: album.artists?.items,
        image: album?.coverArt?.sources[0]?.url,
      },
    });
  });
  return {
    name,
    description,
    image,
    owner,
    totalTracks,
    tracks,
  };
}
