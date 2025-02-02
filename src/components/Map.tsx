import { useEffect } from "react";
import { LINK } from "@/constants/constants";

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

export const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const initMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 17,
    };

    if (document.getElementById("map")) {
      mapInstance = new naver.maps.Map("map", mapOptions);
    }

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance || undefined,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, "click", () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(17);
    });
  };

  useEffect(() => {
    if (typeof naver === "undefined") {
      loadScript(LINK.NAVER_MAP, initMap);
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  return <div id="map" className="aspect-[3/2] w-full mb-8" />;
};
