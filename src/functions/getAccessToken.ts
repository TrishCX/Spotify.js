// @typings
import type { AccessToken } from "../typings";
import { request } from "../request";
import { Constants } from "../secrets/config/Constants";

export async function getAccessToken(): Promise<AccessToken> {
  const data = await request?.get(Constants.accessTokenURI);
  return data as AccessToken;
}
