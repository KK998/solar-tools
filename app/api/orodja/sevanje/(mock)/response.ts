import { SevanjeApiResponse } from "../(utils)/types";

const MockData: SevanjeApiResponse = {
  inputs: {
    location: {
      latitude: 45.813,
      longitude: 14.319,
      elevation: 554.0,
    },
    meteo_data: {
      radiation_db: "PVGIS-SARAH2",
      meteo_db: "ERA5",
      year_min: 2005,
      year_max: 2005,
      use_horizon: true,
      horizon_db: null,
      horizon_data: "DEM-calculated",
    },
    plane: {
      fixed_horizontal: {
        slope: { value: 0, optimal: "-" },
        azimuth: { value: "-", optimal: "-" },
      },
    },
  },
  outputs: {
    monthly: [
      { year: 2005, month: 1, "H(h)_m": 47.72 },
      { year: 2005, month: 2, "H(h)_m": 53.89 },
      { year: 2005, month: 3, "H(h)_m": 94.48 },
      { year: 2005, month: 4, "H(h)_m": 123.22 },
      { year: 2005, month: 5, "H(h)_m": 180.51 },
      { year: 2005, month: 6, "H(h)_m": 184.97 },
      { year: 2005, month: 7, "H(h)_m": 176.15 },
      { year: 2005, month: 8, "H(h)_m": 133.07 },
      { year: 2005, month: 9, "H(h)_m": 108.02 },
      { year: 2005, month: 10, "H(h)_m": 67.66 },
      { year: 2005, month: 11, "H(h)_m": 35.74 },
      { year: 2005, month: 12, "H(h)_m": 28.99 },
    ],
  },
  meta: {
    inputs: {
      location: {
        description: "Selected location",
        variables: {
          latitude: {
            description: "Latitude",
            units: "decimal degree",
          },
          longitude: {
            description: "Longitude",
            units: "decimal degree",
          },
          elevation: {
            description: "Elevation",
            units: "m",
          },
        },
      },
      meteo_data: {
        description: "Sources of meteorological data",
        variables: {
          radiation_db: { description: "Solar radiation database" },
          meteo_db: {
            description:
              "Database used for meteorological variables other than solar radiation",
          },
          year_min: { description: "First year of the calculations" },
          year_max: { description: "Last year of the calculations" },
          use_horizon: { description: "Include horizon shadows" },
          horizon_db: { description: "Source of horizon data" },
        },
      },
      plane: {
        description: "plane",
        fields: {
          slope: {
            description: "Inclination angle from the horizontal plane",
            units: "degree",
          },
          azimuth: {
            description:
              "Orientation (azimuth) angle of the (fixed) PV system (0 = S, 90 = W, -90 = E)",
            units: "degree",
          },
        },
      },
    },
    outputs: {
      monthly: {
        type: "time series",
        timestamp: "monthly averages",
        variables: {
          "H(h)_m": {
            description: "Irradiation on horizontal plane",
            units: "kWh/m2/mo",
          },
        },
      },
    },
  },
};

export default MockData;
