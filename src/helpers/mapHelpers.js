import axios from "axios";
import {
  FOURSQUARE_SECRET,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_VERSION,
} from "@env";
import { getDistance } from "geolib";
import * as Location from "expo-location";

const foursquareUrl = "https://api.foursquare.com/v2/venues/";
const googlePlacesUrl = "";

export const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (e) => reject(e)
    );
  });
};

export const fetchFoursquareInfo = (lat, lng) => {
  const foursquare_requestParamString = `search?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_SECRET}&v=${FOURSQUARE_VERSION}`;
  const foursquare_filteringParams = `ll=${lat},${lng}&limit=1&radius=01`;

  return axios.get(
    `${foursquareUrl}${foursquare_requestParamString}&${foursquare_filteringParams}`
  );
};

/**
 * Returns a human readable address from a latitude, longitude
 * @param {Number} lat
 * @param {Number} lng
 */
export const getReadableAddress = (lat, lng) => {
  return Location.reverseGeocodeAsync({
    latitude: lat,
    longitude: lng,
  });
};

/**
 * !NOT IN USE ANYMORE
 * Returns the distance from where the user tapped on the map to the nearest Foursquare venue
 *
 * @param {Object} pinLatLng
 * @param {Object} foursquareLatLng
 */
export const distanceFromFoursquareVenue = (pinLatLng, foursquareLatLng) => {
  console.log("distanceFromFoursquareVenue -> pinLatLng", pinLatLng);
  console.log(
    "distanceFromFoursquareVenue -> foursquareLatLng",
    foursquareLatLng
  );
  let distance = getDistance(
    { latitude: pinLatLng.lat, longitude: pinLatLng.lng },
    {
      latitude: foursquareLatLng.foursquareLat,
      longitude: foursquareLatLng.foursquareLng,
    }
  );
  return distance;
};
