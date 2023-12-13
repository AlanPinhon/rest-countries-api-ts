import { SearchInput } from "../SearchInput/SearchInput"
import { SearchSelect } from '../SearchSelect/SearchSelect';

export const SearchCountry = () => {
  return (
    <section className="search-container">
      <SearchInput/>
      <SearchSelect/>
    </section>
  )
}