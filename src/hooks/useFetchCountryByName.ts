import { useEffect, useState } from 'react';
import { CountriesData } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';

export const useFetchCountryByName = (name:string) => {

  const [country, setCountry] = useState<CountriesData>();

  const getCountryByName = async (name:string) => {
    const countriesInfo:CountriesData[] = await getCountries();
    const countryData = countriesInfo.find(country => country.name.common.toLowerCase() === name.toLowerCase().split('-').join(' '));
    setCountry(countryData);
  }

  useEffect(() => {
    getCountryByName(name);
  }, [name])

  return{ ...country }
}