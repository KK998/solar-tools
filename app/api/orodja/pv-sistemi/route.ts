import { NextResponse } from "next/server";

export interface OffGridApiBody {
  lat: number;
  lon: number;
  raddatabase: string;
  peakpower: number;
  batterysize: number;
  cutoff: number;
  consumptionday: number;
  angle: number;
  aspect: number;
}

export interface OffGridApiResponse {
  inputs: {
    location: {
      latitude: number;
      longitude: number;
      elevation: number;
    };
    meteo_data: {
      radiation_db: string;
      meteo_db: string;
      year_min: number;
      year_max: number;
      use_horizon: boolean;
      horizon_db: string;
    };
    mounting_system: {
      fixed: {
        slope: {
          value: number;
          optimal: boolean;
        };
        azimuth: {
          value: number;
          optimal: boolean;
        };
      };
    };
    pv_module: {
      peak_power: number;
    };
    battery: {
      capacity: number;
      discharge_cutoff_limit: number;
    };
    consumption: {
      daily: number;
      hourly_profile: "default";
    };
  };
  outputs: {
    monthly: [
      {
        month: number;
        E_d: number;
        E_lost_d: number;
        f_f: number;
        f_e: number;
      }[]
    ];
    totals: {
      d_total: number;
      f_f: number;
      f_e: number;
      E_lost: number;
      E_miss: number;
    };
    histogram: [
      {
        CS_min: number;
        CS_max: number;
        f_CS: number;
      }[]
    ];
  };
  meta: {};
}

export async function POST(request: Request) {
  const body = (await request.json()) as OffGridApiBody;
  const url = new URL("https://re.jrc.ec.europa.eu/api/v5_2/SHScalc");
  url.searchParams.set("outputformat", "json");
  url.searchParams.set("js", "1");
  url.searchParams.set("lat", body.lat.toString());
  url.searchParams.set("lon", body.lon.toString());
  url.searchParams.set("raddatabase", body.raddatabase);
  url.searchParams.set("peakpower", body.peakpower.toString());
  url.searchParams.set("batterysize", body.batterysize.toString());
  url.searchParams.set("cutoff", body.cutoff.toString());
  url.searchParams.set("consumptionday", body.consumptionday.toString());
  url.searchParams.set("angle", body.angle.toString());
  url.searchParams.set("aspect", body.aspect.toString());

  const res = await fetch(url, {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.7",
      "sec-ch-ua": '"Brave";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-requested-with": "XMLHttpRequest",
      cookie:
        "jrc_cookie=!FKp1qb1XTJk+0c9CHgKqdN92BGozdJNs/y7IMpttzr31jLNWX9ehBbjb1JSRazamVXFeL/V6vpErf40=; cck1=%7B%22cm%22%3Afalse%2C%22all1st%22%3Afalse%2C%22closed%22%3Afalse%7D; TS01316d01=01f4fc03dd614eec4a9d96755d714cf214d2a18c72237d542d53d1bec09e7d045af8a7bc4097bfcfa0b33f203742aeb16bb2daae03",
      Referer: "https://re.jrc.ec.europa.eu/pvg_tools/en/tools.html",
      "Referrer-Policy": "same-origin",
    },
    body: null,
    method: "GET",
  });

  const data = (await res.json()) as OffGridApiResponse;
  return NextResponse.json({ data });
}
