import { Navigate, Route, Routes } from 'react-router-dom';
import { CountryInfo } from '../pages/CountryInfo';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/Header';

export const CountriesAppRouter = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="country-info" element={<CountryInfo />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}