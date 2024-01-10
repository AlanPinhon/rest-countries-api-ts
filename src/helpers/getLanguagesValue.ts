import { CountriesData } from '../types/CountriesTypes';

export const getLanguagesValue = (languages:CountriesData["languages"]) => {
  const languagesKeys = Object.keys(languages || {});
  const languagesValues = languagesKeys.map(key => {
    return languages ? languages[key as keyof CountriesData["languages"]] : undefined;
  })

  const language = languagesValues.map(lang => lang);    
  return language;
}