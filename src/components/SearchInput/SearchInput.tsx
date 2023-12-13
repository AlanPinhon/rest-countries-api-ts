import Search from '../../assets/images/search.svg';

export const SearchInput = () => {
  return (
    <form>
      <button>
        <img src={Search} className="search-icon"/>
      </button>
      <input type="text" placeholder="Search for a country..."/>
    </form>
  )
}