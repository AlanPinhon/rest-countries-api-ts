import { useParams } from 'react-router-dom';
import { useFetchCountryByName } from '../../hooks/useFetchCountryByName';
import { getNativeNamesValues } from '../../helpers/getNativeNamesValues';
import { Translation } from '../../types/CountriesTypes';
import { getCurrenciesValues } from '../../helpers/getCurrenciesValues';
import { getLanguagesValue } from '../../helpers/getLanguagesValue';
import './CountryPageStyles.css';

export const CountryPage = () => {

  const { countryName } = useParams();
  
  const { name, flags, flag, population, region, subregion, capital, tld, currencies, languages, borders } = useFetchCountryByName(countryName!);

  const nativeName:Translation = getNativeNamesValues(name!);  
  const currencyName = getCurrenciesValues(currencies!).map(curr => curr?.name);
  const languageTypes = getLanguagesValue(languages!).map(language => language);

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
            <strong>Native Name: <p className='country-value'>{nativeName?.common}</p> </strong>
            <strong>Population: <p className='country-value'>{population}</p> </strong>
            <strong>Region <p className='country-value'>{region}</p> </strong>
            <strong>Sub Region: <p className='country-value'>{subregion}</p> </strong>
            <strong>Capital: <p className='country-value'>{capital}</p> </strong>
          </div>

          <div className="container-country-props">
            <strong>Top Level Domain: <p className='country-value'>{tld}</p> </strong>
            <strong>Currencies: <p className='country-value'>{currencyName.map(currency => currency).join(', ')}</p> </strong>
            <strong>Languages: <p className='country-value'>{languageTypes.map(language => language).join(', ')}</p> </strong>
          </div>
        </div>

        <div className="container-country-borders">
          <strong>Border:</strong>

          {(!borders) && <p>There aren't countries</p>}
          
          {borders?.map(country => (
            <a key={country} className='button-link-sm' href="">{country}</a>
          ))}

        </div>

      </div>
    </section>
  )
}