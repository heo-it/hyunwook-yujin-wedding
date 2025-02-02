const aiNaverApiClientId = import.meta.env.PUBLIC_AI_NAVER_API_CLIENT_ID ?? "";

export const LINK = {
  NAVER_MAP: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${aiNaverApiClientId}`,
};
