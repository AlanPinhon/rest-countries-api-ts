import {Dispatch, SetStateAction, createContext } from 'react';
import { CountriesData } from '../types/CountriesTypes';

export type CountriesContextType = {
  store: StoreContextType;
  setStore: Dispatch<SetStateAction<StoreContextType>>;
}

export type StoreContextType = {
  countries: CountriesData[];
  filteredCountries: CountriesData[];
}

export const CountriesContext = createContext<CountriesContextType>( { 
  store:{countries:[], filteredCountries:[]}, setStore: () => {} 
} );