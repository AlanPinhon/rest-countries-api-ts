import { useFetchCountries } from '../../helpers/useFetchCountries'
import { CountryCard } from '../../components/CountryCard/CountryCard';
import './HomePageStyles.css';

export const HomePage = () => {

  const countries = useFetchCountries();
  
  return (
    <>
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