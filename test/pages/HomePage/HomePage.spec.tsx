import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { HttpResponse, http } from 'msw';
import { server } from '../../../src/mocks/server';
import { HomePage } from '../../../src/pages/HomePage/HomePage';
import { CountriesProvider } from '../../../src/context/CountriesProvider';

describe('Tests in <HomePage/>', () => {

  const routes = [
    {
      path: "/",
      element: <CountriesProvider><HomePage /></CountriesProvider>,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 1,
  });

  const removeDOMElement = () => {
    return waitForElementToBeRemoved(() => screen.queryByText('Loading Countries...'))
  }

  test('should show the loading state', () => {

    render(<HomePage/>);
    expect(screen.getByText('Loading Countries...'));

  });

  test('should show error message if the network status is not 200', async () => {

    server.use(
      http.get('https://restcountries.com/v3.1/all', () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    render(<HomePage/>);

    const errorMsg = await screen.findByText('Network request failed')
    expect(errorMsg).toBeTruthy();

  });

  test('should show error message if the network fail', async () => {

    server.use(
      http.get('https://restcountries.com/v3.1/all', () => {
        return HttpResponse.error();
      })
    )

    render(<HomePage/>);

    const errorMsg = await screen.findByText('Network request failed')
    expect(errorMsg).toBeTruthy();
  });

  test('should show the home page with the country data', async () => {

    render(<RouterProvider router={router} />);

    await removeDOMElement();

    const input = screen.getByPlaceholderText('Search for a country...') as HTMLInputElement;
    const select = screen.getByText('Filter by Region') as HTMLSelectElement;
    
    expect(screen.getByText('Mexico'));
    expect(input).toBeTruthy();
    expect(select).toBeTruthy();

  });

  test('should filter country by name', async () => {

    render(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.queryByText('Loading Countries...'))

    const input = screen.getByPlaceholderText('Search for a country...') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'me'}})
    
    expect(screen.getByText('Mexico'));
    expect(screen.getByText('Cameroon'));
    expect(screen.getByText('Yemen'));

  });

  test('should filter country by region', async () => {

    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    await removeDOMElement();

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    await user.selectOptions(select, 'Africa');

    expect(screen.getByText('Cameroon'));

  });

});