import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.';

type handleCreateUserResponse = (
  user: string | null,
  error: Error | null
) => void;

export async function registerUser(
  email: string,
  password: string,
  callback: handleCreateUserResponse
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    callback(userCredential.user?.email, null);
  } catch (error) {
    callback(null, error instanceof Error ? error : Error(error as string));
  }
}
