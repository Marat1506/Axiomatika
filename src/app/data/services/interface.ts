export interface CountryData {
    wikiDataId: string;
    name: string;
    code: string;
  }
  
export interface CountryResponse {
    data: CountryData[];
    links: any;
    metadata: any;
  }
export interface CityResponse {
    data: CountryData[];
    links: any;
    metadata: any;
  }