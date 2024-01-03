import { ChangeEvent, useState } from 'react';
import { getCountriesByRegion } from '../../helpers/getCountriesByRegion';
import { CountriesData } from '../../types/CountriesTypes';

type RegionProps = {
  setCountries: (countries:CountriesData[]) => void;
}

export const SearchSelect = ({setCountries}:RegionProps) => {

  const [regionValue, setRegionValue] = useState('All');

  const handleRegionValue = async (e:ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setRegionValue(region);

    const countries:CountriesData[] = await getCountriesByRegion(region);
    setCountries(countries);
  };
  
  return (
    <div className="select-container">
      <select value={regionValue} onChange={handleRegionValue} name="region-select" id="region-select">
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