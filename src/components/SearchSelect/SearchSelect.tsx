import { ChangeEvent, useState } from 'react';

type RegionValueProps = {
  setEndpointValue: (endpoint:string) => void;
}

export const SearchSelect = ({setEndpointValue}:RegionValueProps) => {

  const [regionValue, setRegionValue] = useState('all');

  const handleRegionValue = (e:ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setRegionValue(region);
    setEndpointValue((region !== 'all')  ? `region/${region}`  : 'all')
  }
  
  return (
    <div className="select-container">
      <select value={regionValue} onChange={handleRegionValue} name="region-select" id="region-select">
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="antarctic">Antarctic</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}