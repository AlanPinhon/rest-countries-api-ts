import { useEffect, useState } from 'react';
import { CountriesData } from '../types/CountriesTypes';
import { getCountries } from './getCountries';
import { endpoints } from '../constants/endpoints';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<CountriesData[]>([]);

  const getCountriesData = async () => {
    try {
      const countriesInfo:CountriesData[] = await getCountries(endpoints.all);
      setCountries(countriesInfo);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCountriesData();
  },[])

  return countries;
}