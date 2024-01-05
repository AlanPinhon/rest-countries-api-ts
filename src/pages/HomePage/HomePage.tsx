import { useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { ServerErrorMsg } from '../../components/ServerErrorMsg/ServerErrorMsg';
import { useFilterCountries } from '../../hooks/useFilterCountries';
import './HomePageStyles.css';

export const HomePage = () => {

  const [countryRegion, setCountryRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  const {filteredCountries, error, isLoading, getCountriesData} = useFilterCountries(countryRegion,countryName);

  if(isLoading) return <h1 className="loading-text">Loading Countries...</h1>

  if(error) return <ServerErrorMsg getCountriesData={getCountriesData} />
  
  return (
    <>
      <section className="search-container">
        <SearchInput setCountryName={setCountryName}/>
        <SearchSelect setCountryRegion={setCountryRegion}/>
      </section>

      <section className="country-cards-container">

        {(filteredCountries.length === 0) && <h1>No hay países disponibles con el valor ingresado</h1>}
        
        { filteredCountries.map( country => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
        
      </section>
    </>
  )
}