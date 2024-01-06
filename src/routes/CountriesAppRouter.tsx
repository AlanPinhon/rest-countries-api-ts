import { Navigate, Route, Routes } from 'react-router-dom';
import { CountryPage } from '../pages/CountryPage/CountryPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from '../components/Header/Header';

export const CountriesAppRouter = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}