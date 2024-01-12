import React, { useState } from 'react';
import { CountriesContext, CountriesContextType, StoreContextType } from './CountriesContext';

interface ProviderProps {
  children: React.ReactNode;
}

export const CountriesProvider:React.FC<ProviderProps> = ({children}) => {

  const [store, setStore] = useState<StoreContextType>({
    countries: [],
    filteredCountries: [],
  });

  const contextValue:CountriesContextType = { store, setStore };
  
  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  )
}