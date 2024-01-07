import { Currencies } from '../types/CountriesTypes';

export const getCurrenciesValues = (currencies:Currencies) => {
  const currenciesKeys = Object.keys(currencies || {});
  
  const currenciesValues = currenciesKeys.map(key => {
    return currencies ? currencies[key as keyof Currencies] : { name: "", symbol: "" };
  })

  return currenciesValues;
}