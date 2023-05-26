import { NextResponse } from "next/server";
import { SevanjeApiBody, SevanjeApiResponse } from "./(utils)/types";
import { readBodyValueOrThrow } from "./(utils)/validators";

const createResponse = (content: any, status: number = 200) => {
  return new NextResponse(JSON.stringify(content), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export async function POST(request: Request) {
  const body = (await request.json()) as SevanjeApiBody;
  try {
    readBodyValueOrThrow(body);
    const url = new URL("https://re.jrc.ec.europa.eu/api/v5_2/MRcalc");
    url.searchParams.set("outputformat", "json");
    url.searchParams.set("js", "1");
    url.searchParams.set("lat", body.lat.toString());
    url.searchParams.set("lon", body.lon.toString());
    url.searchParams.set("raddatabase", body.raddatabase);

    url.searchParams.set("startyear", body.startyear.toString());
    url.searchParams.set("endyear", body.endyear.toString());
    url.searchParams.set("horirrad", body.horirrad.toString());
    url.searchParams.set("optrad", body.optrad.toString());
    url.searchParams.set("mr_dni", body.mr_dni.toString());
    url.searchParams.set("avtemp", body.avtemp.toString());

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

    const data = (await res.json()) as SevanjeApiResponse;
    return createResponse(data);
  } catch (error) {
    return createResponse({ error: error }, 400);
  }
}
