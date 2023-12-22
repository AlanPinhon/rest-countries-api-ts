import { useEffect, useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { CountriesData } from '../../types/CountriesTypes';
import { getCountries } from '../../helpers/getCountries';
import './HomePageStyles.css';

export const HomePage = () => {

  const [endpointValue, setEndpointValue] = useState('all');
  const [countries, setCountries] = useState<CountriesData[]>([]);

  const getCountriesData = async (endpoint:string) => {
    try {
      const countriesInfo:CountriesData[] = await getCountries(endpoint);
      setCountries(countriesInfo);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCountriesData(endpointValue);
  },[endpointValue])
  
  return (
    <>
      <section className="search-container">
        <SearchInput/>
        <SearchSelect setEndpointValue = {setEndpointValue}/>
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