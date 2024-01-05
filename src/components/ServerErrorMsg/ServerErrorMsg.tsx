import AlertIcon from '../../assets/images/alert-triangle.svg'

type retryClickProps = {
  getCountriesData: () => Promise<void>;
}

export const ServerErrorMsg = ({getCountriesData}:retryClickProps) => {
  return (
    <section className="error-container">
      <img style={{width:'200px'}} className="warn-icon" src={AlertIcon} alt="warn-icon" />
      <h1 className="error-msg">Network request failed</h1>
      <button onClick={getCountriesData} className="retry-btn">Retry</button>
    </section>
  )
}