import { Link } from 'react-router-dom';
import { CountriesData } from '../../types/CountriesTypes';
import './CountryCardStyles.css';

type CountryProps = {
  country:CountriesData
}

export const CountryCard = ({country}:CountryProps) => {

  const {flags, name:{common}, population, region, capital} = country;

  const paramName = common.toLowerCase().split(' ').join('-');

  return (
    <div className="country-card">
      
      <div className="country-flag-container">
        <img src={flags.svg} alt={flags.alt} className="country-flag"/>
      </div>

      <div className="country-info-container">

        <Link to={`/country/${paramName}`} className="country-name">{common}</Link>

        <div className="container-info">
          <p className="bold-prop-text">Population:</p>
          <p className="prop-value">{population.toLocaleString().replace(/\./g, ',')}</p>
        </div>

        <div className="container-info">
          <p className="bold-prop-text">Region:</p>
          <p className="prop-value">{region}</p>
        </div>

        <div className="container-info">
          <p className="bold-prop-text">Capital:</p>
          <p className="prop-value">{capital || "N/A"}</p>
        </div>
        
      </div>

    </div>
  )
};