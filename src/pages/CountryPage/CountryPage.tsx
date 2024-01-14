import { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CountriesContext } from '../../context/CountriesContext';
import { useFetchCountryByName } from '../../hooks/useFetchCountryByName';
import { getNamesByCode } from '../../helpers/getNamesByCode';
import './CountryPageStyles.css';

export const CountryPage = () => {

  const { store:{countries} } = useContext(CountriesContext);

  const { countryName } = useParams();
  const navigate = useNavigate();
  
  const { nativeName, languagesName, currencyName, name, flags, flag, population, region, subregion, capital, tld, borders } = useFetchCountryByName(countryName!);
  
  const borderCountries = getNamesByCode(countries,borders!)  
  
  return (
    <section className='container-page'>
      <Link to="/" onClick={() => navigate(-1)} className='button-link'>Back</Link>

      <div className="container-country">

        <div className="container-country-img">
          <img className='country-img' src={flags?.svg} alt={flag} />
        </div>

        <div className="container-country-info">
          <h1 className='country-name'>{name?.common}</h1>

          <div className="container-country-props">
            <strong>Native Name: <p className='country-value'>{nativeName?.common || "N/A"}</p> </strong>
            <strong>Population: <p className='country-value'>{population}</p> </strong>
            <strong>Region <p className='country-value'>{region}</p> </strong>
            <strong>Sub Region: <p className='country-value'>{subregion || "N/A"}</p> </strong>
            <strong>Capital: <p className='country-value'>{capital || "N/A"}</p> </strong>
          </div>

          <div className="container-country-props">
            <strong>Top Level Domain: <p className='country-value'>{tld}</p> </strong>
            <strong>Currencies: <p className='country-value'>
              {(currencyName && currencyName.length > 0) ? currencyName.join(', ') : "N/A"} 
              </p>
            </strong>
            <strong>Languages: <p className='country-value'>
              {(languagesName && currencyName.length > 0) ? languagesName.sort().join(', ') : "N/A"} </p>
            </strong>
          </div>
        </div>

        <div className="container-country-borders">
          <strong>Border:</strong>

          {
            (borderCountries && borderCountries.length > 0)
              ? borderCountries.sort().map(border => (
                <Link
                  to={`/country/${border.toLowerCase().split(' ').join('-')}`}
                  className='button-link-sm'
                  key={border}>{border}
                </Link>
              ))
              : <p>There aren't countries</p>
          }
          
        </div>

      </div>
    </section>
  )
}