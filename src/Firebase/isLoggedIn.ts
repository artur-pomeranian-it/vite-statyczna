import { getAuth } from 'firebase/auth';

export default function isLoggedIn() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
}
