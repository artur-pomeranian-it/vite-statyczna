import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.';

type handleLoginUserResponse = (
  user: string | null,
  error: Error | null
) => void;

export async function signInUser(
  email: string,
  password: string,
  callback: handleLoginUserResponse
) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    callback(userCredential?.user?.email, null);
  } catch (error) {
    callback(null, error instanceof Error ? error : Error(error as string));
  }
}
