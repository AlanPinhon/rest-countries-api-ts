import React, { useState } from 'react';
import { CountriesContext, CountriesContextType } from './CountriesContext';
import { CountriesData } from '../types/CountriesTypes';

interface ProviderProps {
  children: React.ReactNode;
}

export const CountriesProvider:React.FC<ProviderProps> = ({children}) => {

  const [store, setStore] = useState<CountriesData[]>([]);

  const contextValue:CountriesContextType = { store, setStore };
  
  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  )
}