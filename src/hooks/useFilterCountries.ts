import { useEffect, useState } from 'react';
import { CountriesData } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';

export const useFilterCountries = (regionValue:string, searchValue:string) => {

  const [countries, setCountries] = useState<CountriesData[]>([]);
  
  const getCountriesData = async () => {
    try {
      const countriesInfo:CountriesData[] = await getCountries();
      setCountries(countriesInfo);
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    getCountriesData();
  },[]);
  
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