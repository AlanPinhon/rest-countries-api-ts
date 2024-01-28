import { ChangeEvent } from 'react';
import Search from '../../assets/images/search.svg';
import './SearchInputStyles.css';

type SearchProps = {
  setCountryName: (name:string) => void;
}

export const SearchInput = ({setCountryName}:SearchProps) => {

  const handleNameValue = async (e:ChangeEvent<HTMLInputElement>) => {
    const countryName = e.target.value;
    setCountryName(countryName);
  }


  return (
    <form className="search-form">
      <button disabled className="search-btn">
        <img src={Search} className="search-icon"/>
      </button>
      <input className="search-input" onChange={handleNameValue} type="text" placeholder="Search for a country..."/>
    </form>
  )
}