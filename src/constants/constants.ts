const aiNaverApiClientId = import.meta.env.PUBLIC_AI_NAVER_API_CLIENT_ID ?? "";
const tMapAppKey = import.meta.env.PUBLIC_T_MAP_APP_KEY ?? "";

export const LOCATION = {
  LATITUDE: 37.06842,
  LONGITUDE: 127.065693,
  NAME: "라베아툼 웨딩홀",
};

export const LINK = {
  NAVER_MAP: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${aiNaverApiClientId}`,
  NAVER_MAP_APP: `nmap://place?lat=${LOCATION.LATITUDE}&lng=${LOCATION.LONGITUDE}&name=${LOCATION.NAME}&appname=localhost:4321`,
  KAKAO_MAP_APP: `https://map.kakao.com/link/to/${encodeURIComponent(LOCATION.NAME)},${LOCATION.LATITUDE},${LOCATION.LONGITUDE}`,
  T_MAP_APP: `https://apis.openapi.sk.com/tmap/app/map?appKey=${tMapAppKey}&name=${LOCATION.NAME}&lon=${LOCATION.LONGITUDE}&lat=${LOCATION.LATITUDE}`,
};
