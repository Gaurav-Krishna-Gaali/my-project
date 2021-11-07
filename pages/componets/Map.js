import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F1cmF2LS0tMTkiLCJhIjoiY2t2bzhqMjl4NXF2YjJxb2s4c2VvNjV0MyJ9.rBJGaoOobJoHhHEnscUyGA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};
export default Map;

const Wrapper = tw.div`
flex-1
`;
