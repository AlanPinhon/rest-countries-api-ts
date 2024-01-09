import { useParams } from 'react-router-dom';
import { useFetchCountryByName } from '../../hooks/useFetchCountryByName';
import './CountryPageStyles.css';

export const CountryPage = () => {

  const { countryName } = useParams();
  
  const {  nativeName, languagesName, currencyName, name, flags, flag, population, region, subregion, capital, tld, borders } = useFetchCountryByName(countryName!);
  
  
  return (
    <section>
      <a className='button-link' href="">Back</a>

      <div className="container-country">

        <div className="container-country-img">
          <img className='country-img' src={flags?.svg} alt={flag} />
        </div>

        <div className="container-country-info">
          <h1 className='country-name'>{name?.common}</h1>

          <div className="container-country-props">
            <strong>Native Name: <p className='country-value'>{(nativeName?.common) ? nativeName?.common : "N/A"}</p> </strong>
            <strong>Population: <p className='country-value'>{population}</p> </strong>
            <strong>Region <p className='country-value'>{region}</p> </strong>
            <strong>Sub Region: <p className='country-value'>{(subregion) ? subregion : "N/A"}</p> </strong>
            <strong>Capital: <p className='country-value'>{(capital) ? capital : "N/A"}</p> </strong>
          </div>

          <div className="container-country-props">
            <strong>Top Level Domain: <p className='country-value'>{tld}</p> </strong>
            <strong>Currencies: <p className='country-value'>
              {(currencyName && currencyName.length > 0) ? currencyName.map(currency => currency).join(', ') : "N/A"} 
              </p>
            </strong>
            <strong>Languages: <p className='country-value'>
              {(languagesName && currencyName.length > 0) ? languagesName.map(language => language).sort().join(', ') : "N/A"} </p>
            </strong>
          </div>
        </div>

        <div className="container-country-borders">
          <strong>Border:</strong>

          {(!borders) ? <p>There aren't countries</p> : borders?.map(country => (
            <a key={country} className='button-link-sm' href="">{country}</a>
          ))}
          
        </div>

      </div>
    </section>
  )
}