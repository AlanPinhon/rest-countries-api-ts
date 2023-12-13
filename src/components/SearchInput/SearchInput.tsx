import Search from '../../assets/images/search.svg';
import './SearchInputStyles.css';

export const SearchInput = () => {
  return (
    <form className="search-input">
      <button className="search-btn">
        <img src={Search} className="search-icon"/>
      </button>
      <input type="text" placeholder="Search for a country..."/>
    </form>
  )
}