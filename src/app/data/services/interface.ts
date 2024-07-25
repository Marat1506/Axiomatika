export interface CountryData {
    code: string;
    currencyCodes: string[];
    name: string;
    wikiDataId: string;
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

export interface CityData {
    id: number;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
}