import { ChangeEvent } from 'react';
import Search from '../../assets/images/search.svg';
import './SearchInputStyles.css';

type SearchProps = {
  setCountryName: (name:string) => void;
}

export const SearchInput = ({setCountryName}:SearchProps) => {

  const handleNameValue = async (e:ChangeEvent<HTMLInputElement>) => {
    const countryName = e.target.value;
    const countryCapitalizedFirstLetter = countryName.charAt(0).toUpperCase() + countryName.slice(1);
    setCountryName(countryCapitalizedFirstLetter);
  }


  return (
    <form className="search-input">
      <button className="search-btn">
        <img src={Search} className="search-icon"/>
      </button>
      <input onChange={handleNameValue} type="text" placeholder="Search for a country..."/>
    </form>
  )
}