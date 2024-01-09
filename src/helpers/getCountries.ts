import { CountriesData } from "../types/CountriesTypes";

export const getCountries = async (endpoint?:string) => {
  let url = `https://restcountries.com/v3.1/`;

  (endpoint) ? url = url+= `name/${endpoint}` : url += 'all'; 

  const response = await fetch(url);
  const data:CountriesData[] = await response.json();
  
  if(!response.ok) throw data;
  
  return data;
}