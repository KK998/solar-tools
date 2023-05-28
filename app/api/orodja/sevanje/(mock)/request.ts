export type MockBodyOptionalLat = Omit<typeof mockBody, "lat"> & {
  lat?: number;
};

export const mockBody = {
  lat: 45.813,
  lon: 14.319,
  raddatabase: "PVGIS-SARAH2",
  startyear: "2005",
  endyear: "2020",
  horirrad: true,
  optrad: false,
  mr_dni: false,
  avtemp: false,
};
