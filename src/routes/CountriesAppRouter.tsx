import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailPage } from '../pages/DetailPage';
import { HomePage } from '../pages/HomePage';

export const CountriesAppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="detail" element={<DetailPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}