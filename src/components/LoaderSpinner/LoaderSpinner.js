import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './LoaderSpinner.css';

const LoaderSpinner = () => (
  <div className="spinner">
    <Loader type="Watch" color="#ff3c00" height={100} width={100} timeout={0} />
  </div>
);

export default LoaderSpinner;