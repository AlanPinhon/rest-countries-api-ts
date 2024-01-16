import { useCallback, useContext, useEffect, useState } from 'react';
import { CountriesData, Translation } from '../types/CountriesTypes';
import { getCurrenciesValues } from '../helpers/getCurrenciesValues';
import { getLanguagesValue } from '../helpers/getLanguagesValue';
import { getNativeNamesValues } from '../helpers/getNativeNamesValues';
import { CountriesContext } from '../context/CountriesContext';

export const useFetchCountryByName = (countryName:string) => {
  const { store } = useContext(CountriesContext);

  const [country, setCountry] = useState<CountriesData | undefined>({} as CountriesData);
  const [currencyName, setCurrencyName] = useState<string[]>([]);
  const [languagesName, setLanguagesName] = useState<(string | undefined)[]>();
  const [nativeName, setNativeName] = useState<Translation | undefined>();

  const getCountryByName = useCallback((name:string) => {
    const countryName = name.toLowerCase().split('-').join(' ');
    
    const countryData = store.countries.find(country => country.name.common.toLowerCase() === countryName);
    setCountry(countryData);
  },[store])


  useEffect(() => {
    getCountryByName(countryName);
  }, [countryName, getCountryByName]);

  useEffect(() => {
    if(country) {
    const {currencies, languages, name} = country;
    
    const currValue = getCurrenciesValues(currencies);
    const langValue = getLanguagesValue(languages);
    const nameValue = getNativeNamesValues(name);

    setCurrencyName(currValue);
    setLanguagesName(langValue);
    setNativeName(nameValue);
    }
  },[country])

  return{ ...country, currencyName, languagesName, nativeName, countryExist:Boolean(country) }
}