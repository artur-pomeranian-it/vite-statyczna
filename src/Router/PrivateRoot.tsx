import { Link } from 'react-router-dom';
import isLoggedIn from '../Firebase/isLoggedIn';

interface Props {
  element: JSX.Element;
}

export default function PrivateRoot(props: Props) {
  const { element } = props;
  if (isLoggedIn()) {
    return element;
  } else {
    return (
      <div>
        <h1>Access Restricted</h1>
        <Link to="/login">Go Back</Link>
      </div>
    );
  }
}
