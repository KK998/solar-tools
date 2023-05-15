import { NextResponse } from "next/server";

export interface OnGridApiBody {
  lat: number;
  lon: number;
  raddatabase: string;
  pvtechnology: string;
  installedPeakPvPower: number;
  systemLoss: number;
  mountingPosition: "free" | "building";
  angle: number;
  aspect: number;
}

export interface OnGridApiResponse {
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
      system_loss: number;
      technology: string;
    };
    economic_data: {
      system_cost: any;
      interest: any;
      lifetime: any;
    };
  };
  outputs: {
    monthly: {
      fixed: {
        month: number;
        E_d: number;
        E_m: number;
        "H(i)_d": number;
        "H(i)_m": number;
        SD_m: number;
      }[];
    };
    totals: {
      fixed: {
        E_d: number;
        E_m: number;
        E_y: number;
        "H(i)_d": number;
        "H(i)_m": number;
        "H(i)_y": number;
        SD_m: number;
        SD_y: number;
        l_aoi: number;
        l_spec: string;
        l_tg: number;
        l_total: number;
      };
    };
  };
  meta: {};
}

const readBodyValueOrThrow = (body: OnGridApiBody) => {
  const requiredKeys = [
    "lat",
    "lon",
    "raddatabase",
    "pvtechnology",
    "installedPeakPvPower",
    "systemLoss",
    "mountingPosition",
    "angle",
    "aspect",
  ];
  const missingKeys = requiredKeys.filter((key) => !(key in body));
  if (missingKeys.length > 0) {
    throw new Error(`Missing values: ${missingKeys.join(", ")}`);
  }
};

const createResponse = (content: any, status: number = 200) => {
  return new NextResponse(JSON.stringify(content), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export async function POST(request: Request) {
  const body = (await request.json()) as OnGridApiBody;
  try {
    readBodyValueOrThrow(body);
    const url = new URL("https://re.jrc.ec.europa.eu/api/v5_2/PVcalc");
    url.searchParams.set("outputformat", "json");
    url.searchParams.set("js", "1");
    url.searchParams.set("lat", body.lat.toString());
    url.searchParams.set("lon", body.lon.toString());
    url.searchParams.set("raddatabase", body.raddatabase);
    url.searchParams.set("mountingplace", body.mountingPosition);
    url.searchParams.set("peakpower", body.installedPeakPvPower.toString());
    url.searchParams.set("loss", body.systemLoss.toString());
    url.searchParams.set("pvtechchoice", body.pvtechnology);
    url.searchParams.set("angle", body.angle.toString());
    url.searchParams.set("aspect", body.aspect.toString());

    const res = await fetch(url, {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.7",
        "sec-ch-ua":
          '"Brave";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
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
      method: "GET",
    });

    const data = (await res.json()) as OnGridApiResponse;
    return createResponse(data);
  } catch (error) {
    return createResponse({ error: error }, 400);
  }
}
