import { Navigate, Route, Routes } from 'react-router-dom';
import { CountryPage } from '../pages/CountryPage/CountryPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from '../components/Header/Header';
import { CountriesProvider } from '../context/CountriesProvider';

export const CountriesAppRouter = () => {
  return (
    <CountriesProvider>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </CountriesProvider>
  )
}