import { useContext, useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { ServerErrorMsg } from '../../components/ServerErrorMsg/ServerErrorMsg';
import { useFilterCountries } from '../../hooks/useFilterCountries';
import { CountriesContext } from '../../context/CountriesContext';
import './HomePageStyles.css';

export const HomePage = () => {

  const { store:{filteredCountries} } = useContext(CountriesContext);

  const [countryRegion, setCountryRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  const { error, isLoading, getCountriesData } = useFilterCountries(countryRegion,countryName);

  if(isLoading) return <h1 className="loading-text">Loading Countries...</h1>

  if(error) return <ServerErrorMsg getCountriesData={getCountriesData} />
  
  return (
    <>
      <section className="search-container">
        <SearchInput setCountryName={setCountryName}/>
        <SearchSelect setCountryRegion={setCountryRegion}/>
      </section>

      <section className="country-cards-container">
      
        {(filteredCountries && filteredCountries.length > 0)
          ? filteredCountries.map( country => (
            <CountryCard
              key={country.name.common}
              country={country}
            />
          ))
          : <h1>The country entered doesn't exist</h1>
        }

      </section>
    </>
  )
}