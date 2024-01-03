import { CountriesData } from "../types/CountriesTypes";
import { getCountries } from "./getCountries"

export const getCountriesByRegion = async (value:string) => {
  const countries:CountriesData[] = await getCountries();
  const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  if(region.includes(value)) {
    return countries.filter(country => country.region === value);
  } else {
    return countries;
  }
}