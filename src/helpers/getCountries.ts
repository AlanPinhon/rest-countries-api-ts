import { CountriesData } from "../types/CountriesTypes";

export const getCountries = async (endpoint:string = 'all', value?:string) => {
  let url = 'https://restcountries.com/v3.1/';

  if((endpoint === 'region' || endpoint === 'name') && value !== 'all') {
    url += `${endpoint}/${value}`;
  } else {
    url += 'all';
  }

  const response = await fetch(url);
  const data:CountriesData[] = await response.json();
  
  if(!response.ok) throw data;
  
  return data;
}