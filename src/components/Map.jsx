import { Axios } from "axios";
import { useEffect } from "react";

const Map = () => {
  const options = {
    method: "GET",
    url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
    params: {
      latlng: "40.714224,-73.96145",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "33fcead51cmsh932a9ac7c66c6b3p10edb7jsn2f9128b511c3",
      "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
    },
  };

  useEffect(() => {}, []);

  return <></>;
};

export default Map;
