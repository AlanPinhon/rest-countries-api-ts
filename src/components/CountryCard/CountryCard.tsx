import { CountriesData } from '../../types/CountriesTypes';
import './CountryCardStyles.css';

type CountryProps = {
  country:CountriesData
}

export const CountryCard = ({country}:CountryProps) => {

  const {flags, name, population, region, capital} = country;
  return (
    <div className="country-card">
      
      <div className="country-flag-container">
        <img src={flags.svg} alt={flags.alt} className="country-flag"/>
      </div>

      <div className="country-info-container">

        <h3 className="country-name">{name.common}</h3>

        <div className="population-info">
          <p className="bold-prop-text">Population:</p>
          <p className="prop-value">{population}</p>
        </div>

        <div className="region-info">
          <p className="bold-prop-text">Region:</p>
          <p className="prop-value">{region}</p>
        </div>

        <div className="capital-info">
          <p className="bold-prop-text">Capital:</p>
          <p className="prop-value">{capital}</p>
        </div>
        
      </div>

    </div>
  )
};