import { useParams } from 'react-router-dom';

export const CountryPage = () => {

  const {name} = useParams();
  console.log(name);

  return (
    <h1>CountryPage</h1>
  )
}