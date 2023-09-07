import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { registerUser } from '../../Firebase/registerUser';
import { useState } from 'react';
import { useAppDispatch } from '../../Store/hooks';
import { userLogin } from '../../Store/authSlice';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password && email.length > 0 && password.length > 6) {
      registerUser(email, password, (userEmail, error) => {
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
        <h2>Register Form</h2>
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
        <input type="submit" value="Register" />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {isError && <ErrorMessage message="" />}
      </AuthForm>
    </div>
  );
}
