export type MockBodyOptionalLat = Omit<typeof mockBody, "lat"> & {
  lat?: number;
};

export const mockBody = {
  lat: 1,
  lon: 1,
  raddatabase: "1",
  startyear: "1",
  endyear: "1",
  horirrad: true,
  optrad: true,
  mr_dni: true,
  avtemp: true,
};
