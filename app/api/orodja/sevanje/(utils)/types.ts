export interface SevanjeApiBody {
  lat: number;
  lon: number;
  raddatabase: string;
  startyear: string;
  endyear: string;
  horirrad: boolean;
  optrad: boolean;
  mr_dni: boolean;
  avtemp: boolean;
}

export interface SevanjeApiResponse {
  inputs: {};
  outputs: {
    monthly: {
      year: number;
      month: number;
      "H(h)_m": number;
      "H(i_opt)_m": number;
      "Hb(n)_m": number;
      T2m: number;
    }[];
  };
  meta: {};
}
