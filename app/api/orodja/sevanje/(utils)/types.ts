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
  outputs: {};
  meta: {};
}
