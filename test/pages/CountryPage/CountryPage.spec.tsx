import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { CountriesProvider } from '../../../src/context/CountriesProvider';
import { CountryPage } from '../../../src/pages/CountryPage/CountryPage';
import { HomePage } from '../../../src/pages/HomePage/HomePage';

describe('Tests in <CountryPage/>', () => {

  const TestComponent = () => {
    return (
      <CountriesProvider>
        <MemoryRouter initialEntries={["/home"]}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/country/:countryName" element={<CountryPage />} />
          </Routes>
        </MemoryRouter>
      </CountriesProvider>
    )
  }

  const removeDOMElement = () => {
    return waitForElementToBeRemoved(() => screen.queryByText('Loading Countries...'))
  }

  test('should show the detailed country info', async () => {
    const user = userEvent.setup();

    render(<TestComponent/>);

    await removeDOMElement();

    const countryLink = screen.getByText('Mexico');
    await user.click(countryLink);
    
    const countryNativeName = screen.getByText('México');
    const countryCapital = screen.getByText('Mexico City');
    const countryRegion = screen.getByText('Americas');
    const countryBordersLinks = document.querySelectorAll('.button-link-sm')

    expect(countryNativeName).toBeTruthy();
    expect(countryCapital).toBeTruthy();
    expect(countryRegion).toBeTruthy();
    expect(countryBordersLinks.length).toBe(3);

  });

  test('should show detailed information of the selected border country', async () => {
    const user = userEvent.setup();

    render(<TestComponent/>);

    await removeDOMElement();

    const countryLink = screen.getByText('Mexico');
    await user.click(countryLink);
    
    const countryBorderLink = screen.getByText('Belize');
    await user.click(countryBorderLink);

    const countryNativeName = screen.getByText('Belice');
    const countryCapital = screen.getByText('Belmopan');
    const countryRegion = screen.getByText('Americas');
    const countryBordersLinks = document.querySelectorAll('.button-link-sm');

    expect(countryNativeName).toBeTruthy();
    expect(countryCapital).toBeTruthy();
    expect(countryRegion).toBeTruthy();
    expect(countryBordersLinks.length).toBe(2);

  });

  test('should return to Home Page when click the back button', async () => {
    const user = userEvent.setup();

    render(<TestComponent/>);

    await removeDOMElement();

    const countryLink = screen.getByText('Mexico');
    await user.click(countryLink);
    
    const backHomeLink = screen.getByText('Back');
    await user.click(backHomeLink);
    
    expect(screen.getByPlaceholderText('Search for a country...')).toBeTruthy();
    expect(screen.getByText('Filter by Region')).toBeTruthy();
  });

});