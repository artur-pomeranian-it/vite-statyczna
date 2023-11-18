import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.';

type handleLoginUserResponse = (
  user: string | null,
  error: Error | null
) => void;

export async function signInUser(
  email: string,
  password: string
): Promise<[string | null, Error | null]> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return [userCredential?.user?.email, null];
  } catch (error) {
    return [null, error instanceof Error ? error : Error(error as string)];
  }
}
