import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { signInUser } from '../../Firebase/signInUser';
import { useState } from 'react';
import { useAppDispatch } from '../../Store/hooks';
import { userLogin } from '../../Store/authSlice';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { useFormInputs } from '../useFormInputs/useFormInputs';

export default function Login() {
  const [inputs, handleInputChange] = useFormInputs();
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (email && password && email.length > 0 && password.length > 6) {
    //   const [userEmail, error] = await signInUser(email, password);
    //   if (error) setIsError(true);
    //   if (userEmail) {
    //     dispatch(userLogin(userEmail));
    //     setIsError(false);
    //     navigate('/dashboard');
    //   }
    // }
  };

  return (
    <div className="login-container">
      <AuthForm onSubmit={onSubmit}>
        <h2>Login Form</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <input type="submit" value="Login" />
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {isError && <ErrorMessage message="" />}
      </AuthForm>
    </div>
  );
}
