import { useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { CountriesData } from '../../types/CountriesTypes';
import { useFilterCountries } from '../../hooks/useFilterCountries';
import './HomePageStyles.css';

export const HomePage = () => {

  const [countryRegion, setCountryRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  const countries:CountriesData[] = useFilterCountries(countryRegion,countryName);
  
  return (
    <>
      <section className="search-container">
        <SearchInput setCountryName={setCountryName}/>
        <SearchSelect setCountryRegion={setCountryRegion}/>
      </section>

      <section className="country-cards-container">
        
        { countries.map( country => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
        
      </section>
    </>
  )
}