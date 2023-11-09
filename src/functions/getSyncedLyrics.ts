import { request } from "../request";
import { Constants } from "../secrets/config/Constants";
import { Lyrics } from "../typings";

export async function getSyncedLyrics(id: string) {
  const data = await request.get(`${Constants.lyricsAPI}=${id}`);
  const lyrics: Lyrics[] = [];

  data.lines.map((data: any) => {
    return lyrics.push({
      text: data?.words,
      startTimeMS: data.startTimeMs,
      endTimeMS: data.endTimeMs,
    });
  });
  return lyrics;
}
