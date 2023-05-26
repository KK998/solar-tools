import { OnGridApiResponse } from "./route";

const MockData: OnGridApiResponse = {
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
      system_loss: 1,
      technology: "string;",
    },
    economic_data: {
      system_cost: "",
      interest: "",
      lifetime: "",
    },
  },
  outputs: {
    monthly: {
      fixed: [
        {
          month: 1,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 2,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 3,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 4,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 5,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 6,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 7,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 8,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 9,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 10,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 11,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
        {
          month: 12,
          E_d: 1,
          E_m: 1,
          "H(i)_d": 1,
          "H(i)_m": 1,
          SD_m: 1,
        },
      ],
    },
    totals: {
      fixed: {
        E_d: 1,
        E_m: 1,
        E_y: 1,
        "H(i)_d": 1,
        "H(i)_m": 1,
        "H(i)_y": 1,
        SD_m: 1,
        SD_y: 1,
        l_aoi: 1,
        l_spec: "string;",
        l_tg: 1,
        l_total: 1,
      },
    },
  },
  meta: {},
};

export default MockData;
