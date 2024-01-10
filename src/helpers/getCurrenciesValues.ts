import { CountriesData } from '../types/CountriesTypes';

export const getCurrenciesValues = (currencies:CountriesData["currencies"]) => {
  const currenciesKeys = Object.keys(currencies || {});
  const currenciesValues = currenciesKeys.map(key => {
    return currencies ? currencies[key] : {name: "", symbol: ""};
  })

  const currency = currenciesValues.map(curr => curr?.name);
  return currency;
}