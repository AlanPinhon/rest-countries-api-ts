import { Navigate, Route, Routes } from 'react-router-dom';
import { CountryInfo } from '../pages/CountryInfo';
import { HomePage } from '../pages/HomePage';

export const CountriesAppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="country-info" element={<CountryInfo />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}