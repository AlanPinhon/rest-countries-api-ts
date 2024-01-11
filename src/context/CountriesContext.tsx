import {Dispatch, SetStateAction, createContext } from 'react';
import { CountriesData } from '../types/CountriesTypes';

export type CountriesContextType = {
  store: CountriesData[];
  setStore: Dispatch<SetStateAction<CountriesData[]>>;
}

export const CountriesContext = createContext<CountriesContextType>({store:[],setStore: () => {}});