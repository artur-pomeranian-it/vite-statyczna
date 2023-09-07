import { Link } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

interface Props {
  element: JSX.Element;
}

export default function PrivateRoot(props: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        // User is signed out
        // ...
        setIsLoggedIn(false);
      }
    });
  });

  const { element } = props;
  if (isLoggedIn) {
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
