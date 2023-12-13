import { useFetchCountries } from '../../helpers/useFetchCountries'
import { CountryCard } from '../../components/CountryCard/CountryCard';
import './HomePageStyles.css';
import { SearchCountry } from '../../components/SearchCountry/SearchCountry';

export const HomePage = () => {

  const countries = useFetchCountries();
  
  return (
    <>
      <SearchCountry/>

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