import { getCountries } from '../../src/helpers/getCountries';
import countryDataResponse from '../../src/mocks/mock.countryData.json';

describe('test in getCountries', () => { 

  test('should get the country data', async () => {

    const response =  countryDataResponse;

    const country = await getCountries();
    expect(country).toEqual(response);
  })

})