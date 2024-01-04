import { CountriesData } from "../types/CountriesTypes";
import { getCountries } from "./getCountries"

export const getCountriesByFilter = async (regionValue:string, searchValue:string) => {

  const countries:CountriesData[] = await getCountries();
  const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  if(region.includes(regionValue) && searchValue) {
    return countries.filter(country => country.region === regionValue).filter(country => country.name.common.includes(searchValue));
  }

  if(region.includes(regionValue)) {
    return countries.filter(country => country.region === regionValue);
  }

  if(searchValue) {
    return countries.filter(country => country.name.common.includes(searchValue));
  }
  
  return countries;
}