import { useEffect, useState } from 'react';
import { CountriesData } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';

export const useFilterCountries = (regionValue:string, searchValue:string) => {

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountriesData[]>([]);
  
  const getCountriesData = async () => {
    try {
      const countriesInfo:CountriesData[] = await getCountries();
      setCountries(countriesInfo);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error as Error);
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getCountriesData();
  },[]);
  
  useEffect(() => {
    const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
    let result = countries;

    if(region.includes(regionValue)) {
      result = result.filter(country => country.region === regionValue);
    }
    
    if(searchValue) {
      result = result.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));
    }

    setFilteredCountries(result);
  }, [regionValue, searchValue, countries]);

  return {filteredCountries, error, isLoading, getCountriesData};
}