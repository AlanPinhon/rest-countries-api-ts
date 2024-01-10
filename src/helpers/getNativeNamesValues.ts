import { Name, Translation } from '../types/CountriesTypes';

export const getNativeNamesValues = (name:Name) => {
  const nativeNamesKeys = Object.keys(name?.nativeName || {});
  const nativeNamesValues:Translation[] = nativeNamesKeys.map(key => {
    return name.nativeName ? name.nativeName[key] : { official: name.official, common: name.common }
  })

  const nativeName = nativeNamesValues[nativeNamesValues.length - 1];
  return nativeName;
}
