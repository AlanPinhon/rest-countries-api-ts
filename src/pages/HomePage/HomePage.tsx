import { useEffect, useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { CountriesData } from '../../types/CountriesTypes';
import { getCountriesByFilter } from '../../helpers/getCountriesByFilter';
import './HomePageStyles.css';

export const HomePage = () => {

  const [countryRegion, setCountryRegion] = useState('');
  const [countryName, setCountryName] = useState('');
  const [countries, setCountries] = useState<CountriesData[]>([]);

  const getCountriesData = async (region:string, name:string) => {
    try {
      const countriesInfo:CountriesData[] = await getCountriesByFilter(region,name);
      setCountries(countriesInfo);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCountriesData(countryRegion,countryName);
  },[countryRegion,countryName]);
  
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