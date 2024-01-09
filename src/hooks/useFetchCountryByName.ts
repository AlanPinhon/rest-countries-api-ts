import { useEffect, useState } from 'react';
import { CountriesData, Name, Translation } from '../types/CountriesTypes';
import { getCountries } from '../helpers/getCountries';

export const useFetchCountryByName = (countryName:string) => {

  const [country, setCountry] = useState<CountriesData>({} as CountriesData);
  const [currencyName, setCurrencyName] = useState<string[]>([]);
  const [languagesName, setLanguagesName] = useState<(string | undefined)[]>();
  const [nativeName, setNativeName] = useState<Translation | undefined>();

  
  const getCountryByName = async (name:string) => {
    const countriesInfo:CountriesData[] = await getCountries(name.toLowerCase().split('-').join(' '));
    const countryData = countriesInfo.find(country => country.name.common.toLowerCase() === name.toLowerCase().split('-').join(' '));
    (countryData) && setCountry(countryData);
  }

  const getCurrenciesValues = (currencies:CountriesData["currencies"]) => {
    const currenciesKeys = Object.keys(currencies || {});
    const currenciesValues = currenciesKeys.map(key => {
      return currencies ? currencies[key] : {name: "", symbol: ""};
    })

    const currency = currenciesValues.map(curr => curr?.name);
    setCurrencyName(currency);
  }

  const getLanguagesValue = (languages:CountriesData["languages"]) => {
    const languagesKeys = Object.keys(languages || {});
    const languagesValues = languagesKeys.map(key => {
      return languages ? languages[key as keyof CountriesData["languages"]] : undefined;
    })
  
    setLanguagesName(languagesValues);
  }

  const getNativeNamesValues = (name:Name) => {
    const nativeNamesKeys = Object.keys(name?.nativeName || {});
    const nativeNamesValues:Translation[] = nativeNamesKeys.map(key => {
      return name.nativeName ? name.nativeName[key] : { official: name.official, common: name.common }
    })
  
    const nativeName = nativeNamesValues[nativeNamesValues.length - 1];
    setNativeName(nativeName);
  }
  
  useEffect(() => {
    getCountryByName(countryName);
  }, [countryName]);

  useEffect(() => {
    const {currencies, languages, name} = country;
    getCurrenciesValues(currencies);
    getLanguagesValue(languages);
    getNativeNamesValues(name);
  },[country])

  return{ ...country, currencyName, languagesName, nativeName }
}