import { SevanjeApiResponse } from "./route";

const MockData: SevanjeApiResponse = {
  inputs: {
    location: {
      latitude: 1,
      longitude: 1,
      elevation: 1,
    },
    meteo_data: {
      radiation_db: "string;",
      meteo_db: "string;",
      year_min: 1,
      year_max: 1,
      use_horizon: true,
      horizon_db: "string;",
    },
    mounting_system: {
      fixed: {
        slope: {
          value: 1,
          optimal: true,
        },
        azimuth: {
          value: 1,
          optimal: true,
        },
      },
    },
    pv_module: {
      peak_power: 1,
    },
    battery: {
      capacity: 1,
      discharge_cutoff_limit: 1,
    },
    consumption: {
      daily: 1,
      hourly_profile: "default",
    },
  },
  outputs: {
    monthly: [
      {
        month: 1,
        E_d: 1,
        E_lost_d: 1,
        f_f: 1,
        f_e: 1,
      },
    ],
    totals: {
      d_total: 1,
      f_f: 1,
      f_e: 1,
      E_lost: 1,
      E_miss: 1,
    },
    histogram: [
      {
        CS_min: 1,
        CS_max: 1,
        f_CS: 1,
      },
    ],
  },
  meta: {},
};

export default MockData;
