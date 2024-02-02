import AlertIcon from '../../assets/images/alert-triangle.svg';
import './ServerErrorMsgStyles.css';

type retryClickProps = {
  getCountriesData: () => Promise<void>;
}

export const ServerErrorMsg = ({getCountriesData}:retryClickProps) => {
  return (
    <section className="error-container">
      <img className="warn-icon" src={AlertIcon} alt="warn-icon" />
      <h1 className="error-msg">Network request failed</h1>
      <button onClick={getCountriesData} className="retry-btn">Retry</button>
    </section>
  )
}