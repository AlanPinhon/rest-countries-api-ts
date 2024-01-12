import { useCallback, useContext, useEffect, useState } from 'react';
import { CountriesData } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';
import { CountriesContext } from '../context/CountriesContext';

export const useFilterCountries = (regionValue:string, searchValue:string) => {

  const { store , setStore } = useContext(CountriesContext);

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const getCountriesData = useCallback( async () => {
    try {
      setIsLoading(false);
      if(store.countries.length !== 0) return;
      
      const countries:CountriesData[] = await getCountries();
      setStore( (currentStore) => ({ ...currentStore, countries}));
      setError(null);
    } catch (error) {
      setError(error as Error);
      setIsLoading(false);
    }
  }, [store, setStore]); 
  
  useEffect(() => {
    getCountriesData();
  },[getCountriesData]);
  
  
  useEffect(() => {
    const region = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
    let filteredCountries = store.countries;
    
    if(region.includes(regionValue)) {
      filteredCountries = filteredCountries.filter(country => country.region === regionValue);
    }
    
    if(searchValue) {
      filteredCountries = filteredCountries.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));
    }
    
    setStore({countries:store.countries, filteredCountries: filteredCountries});
  }, [regionValue, searchValue, store.countries, setStore]);
  
  return { error, isLoading, getCountriesData };
}