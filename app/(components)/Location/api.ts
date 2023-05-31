export const getLocationAddress = async (lat: number, lng: number) => {
  const url =
    "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
    "&lat=" +
    lat +
    "&lon=" +
    lng;

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
    },
  });
  const json = await response.json();
  return json.display_name;
};
