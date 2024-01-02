import { CountriesData } from "../types/CountriesTypes";

export const getCountries = async () => {
  const url = 'https://restcountries.com/v3.1/all';

  const response = await fetch(url);
  const data:CountriesData[] = await response.json();
  
  if(!response.ok) throw data;
  
  return data;
}