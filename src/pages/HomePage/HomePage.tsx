import { useEffect, useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { CountriesData } from '../../types/CountriesTypes';
import { getCountries } from '../../helpers/getCountries';
import './HomePageStyles.css';

export const HomePage = () => {

  const [countries, setCountries] = useState<CountriesData[]>([]);

  const getCountriesData = async () => {
    try {
      const countriesInfo:CountriesData[] = await getCountries();
      setCountries(countriesInfo);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCountriesData();
  },[]);
  
  return (
    <>
      <section className="search-container">
        <SearchInput/>
        <SearchSelect setCountries={setCountries}/>
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