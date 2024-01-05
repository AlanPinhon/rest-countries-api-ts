import { ChangeEvent } from 'react';

type RegionProps = {
  setCountryRegion: (region:string) => void;
}

export const SearchSelect = ({setCountryRegion}:RegionProps) => {

  const handleRegionValue = async (e:ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setCountryRegion(region);
  };
  
  return (
    <div className="select-container">
      <select onChange={handleRegionValue} name="region-select" id="region-select">
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}