import { http, HttpResponse } from 'msw';
import countryDataResponse from './mock.countryData.json';
 
export const handlers = [
  http.get('https://restcountries.com/v3.1/all', () => {
    return HttpResponse.json(countryDataResponse);
  }),
]