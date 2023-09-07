import { Link } from 'react-router-dom';
import './fallback.scss';

function Fallback() {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
}

export default Fallback;
