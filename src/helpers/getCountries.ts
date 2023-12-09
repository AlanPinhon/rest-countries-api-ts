import { CountriesData } from "../types/CountriesTypes";

export const getCountries = async (endpoint:string) => {
  const url = `https://restcountries.com/v3.1${endpoint}`;

  const response = await fetch(url);
  const data:CountriesData = await response.json();
  
  if(!response.ok) throw data;
  
  return data;
}