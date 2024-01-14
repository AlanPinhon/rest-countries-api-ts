import { CountriesData } from '../types/CountriesTypes';

export const getNamesByCode = (countries:CountriesData[], borders:string[]) => {

  let borderNames:string[] = [];

  countries.filter(country => {
    borders?.map(border => {
      if (country.cca3 === border) {
        borderNames = [...borderNames, country.name.common];
      }
    })
  })

  return borderNames;
}