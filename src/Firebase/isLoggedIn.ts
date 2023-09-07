import { getAuth } from 'firebase/auth';
import { auth as at } from '.';

export default function isLoggedIn() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(at.currentUser, user);

  if (user) {
    return true;
  } else {
    return false;
  }
}
