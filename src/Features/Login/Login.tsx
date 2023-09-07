import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { signInUser } from '../../Firebase/signInUser';
import { useState } from 'react';
import { useAppDispatch } from '../../Store/hooks';
import { userLogin } from '../../Store/authSlice';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password && email.length > 0 && password.length > 6) {
      signInUser(email, password, (userEmail, error) => {
        console.log(error, userEmail);
        if (error) setIsError(true);
        if (userEmail) {
          dispatch(userLogin(userEmail));
          setIsError(false);
          navigate('/dashboard');
        }
      });
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
