import { getMSToDuration } from "../helpers";
import { request } from "../request";
import { Artists } from "../typings/index";
import { getAccessToken } from "./getAccessToken";

interface TopTracks {
  title?: string;
  id?: string;
  duration?: string;
  image?: string;
  type?: string;
}

export async function getArtists(id: string): Promise<Artists> {
  const { accessToken } = await getAccessToken();

  const response = await request.get(
    `https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryArtistOverview&variables=%7B%22uri%22%3A%22spotify%3Aartist%3A1LbQ66B9mZIHGhjRu9fvKo%22%2C%22locale%22%3A%22%22%2C%22includePrerelease%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2279a4a9d7c3a3781d801e62b62ef11c7ee56fce2626772eb26cd20c69f84b3f49%22%7D%7D`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const topTracksArray: TopTracks[] = [];

  const data = response?.data?.artistUnion;
  const name = data?.profile?.name;
  const biography = data?.profile?.biography;
  const visuals = data?.visuals;
  const headerImage = visuals?.headerImage?.sources[0].url;
  const gallery = visuals?.gallery?.items?.map(
    ({ sources }: any, _: number) => sources[0]?.url || undefined
  );
  const profileImage = visuals?.avatarImage.sources[0]?.url;
  const discography = data?.discography;
  const topTracks = discography?.topTracks?.items;
  topTracks.map(({ track }: any, _: number) =>
    topTracksArray.push({
      title: track?.name,
      id: track?.id,
      duration: getMSToDuration(track?.duration?.totalMilliseconds),
      type: "track",
      image: track?.albumOfTrack?.coverArt?.sources[0].url,
    })
  );
  const newTrack = discography?.latest;
  const latest = {
    title: newTrack?.name,
    type: newTrack?.type,
    id: newTrack?.id,
    label: newTrack?.label,
    image: newTrack.coverArt?.sources[0]?.url,
  };
  return {
    name,
    biography,
    gallery,
    headerImage,
    topTracks: topTracksArray,
    latest,
    profileImage,
  };
}
