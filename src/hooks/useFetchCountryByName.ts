import { useEffect, useState } from 'react';
import { CountriesData, Translation } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';
import { getCurrenciesValues } from '../helpers/getCurrenciesValues';
import { getLanguagesValue } from '../helpers/getLanguagesValue';
import { getNativeNamesValues } from '../helpers/getNativeNamesValues';

export const useFetchCountryByName = (countryName:string) => {

  const [country, setCountry] = useState<CountriesData>({} as CountriesData);
  const [currencyName, setCurrencyName] = useState<string[]>([]);
  const [languagesName, setLanguagesName] = useState<(string | undefined)[]>();
  const [nativeName, setNativeName] = useState<Translation | undefined>();

  const getCountryByName = async (name:string) => {
    const countryName = name.toLowerCase().split('-').join(' ');

    const countriesInfo:CountriesData[] = await getCountries(`name/${countryName}`);

    const countryData = countriesInfo.find(country => country.name.common.toLowerCase() === countryName);
    (countryData) && setCountry(countryData);
  }
  useEffect(() => {
    getCountryByName(countryName);
  }, [countryName]);

  useEffect(() => {
    const {currencies, languages, name} = country;
    
    const currValue = getCurrenciesValues(currencies);
    const langValue = getLanguagesValue(languages);
    const nameValue = getNativeNamesValues(name);

    setCurrencyName(currValue);
    setLanguagesName(langValue);
    setNativeName(nameValue);
  },[country])

  return{ ...country, currencyName, languagesName, nativeName }
}