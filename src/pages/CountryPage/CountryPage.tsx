import { useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CountriesContext } from '../../context/CountriesContext';
import { useFetchCountryByName } from '../../hooks/useFetchCountryByName';
import { getNamesByCode } from '../../helpers/getNamesByCode';
import './CountryPageStyles.css';

export const CountryPage = () => {

  const { store:{countries} } = useContext(CountriesContext);

  const { countryName } = useParams();
  
  const { nativeName, languagesName, currencyName, name, flags, flag, population, region, subregion, capital, tld, borders, countryExist } = useFetchCountryByName(countryName!);
  
  const borderCountries = getNamesByCode(countries,borders!)  

  if(!countryExist){
    return <Navigate to="/home"/>
  }
  
  return (
    <section className='container-page'>
      <Link to="/home" className='button-link'>Back</Link>

      <div className="container-country">

        <div className="container-country-img">
          <img className='country-img' src={flags?.svg} alt={flag} />
        </div>

        <div className="container-country-info">
          <h1 className='country-name'>{name?.common}</h1>

          <div className="country-props">

            <div className="container-country-props">
              <div className="container-props">
                <p className='country-prop'>Native Name:</p>
                <p className='country-value'>{nativeName?.common || "N/A"}</p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Population:</p>
                <p className='country-value'>{population?.toLocaleString().replace(/\./g, ',')}</p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Region:</p>
                <p className='country-value'>{region}</p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Sub Region:</p>
                <p className='country-value'>{subregion || "N/A"}</p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Capital:</p>
                <p className='country-value'>{capital || "N/A"}</p>
              </div>
            </div>

            <div className="container-country-props">
              <div className="container-props">
                <p className='country-prop'>Top Level Domain:</p>
                <p className='country-value'>{tld}</p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Currencies:</p>
                <p className='country-value'>
                  {(currencyName && currencyName.length > 0) ? currencyName.join(', ') : "N/A"} 
                </p>
              </div>
              <div className="container-props">
                <p className='country-prop'>Languages:</p>
                <p className='country-value'>
                  {(languagesName && currencyName.length > 0) ? languagesName.sort().join(', ') : "N/A"}
                </p>
              </div>
            </div>
            
          </div>

          <div className="container-country-borders">
            <p className='border-country-prop'>Border Countries:</p>
    
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

      </div>
    </section>
  )
}