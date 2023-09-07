import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../Firebase/signOutUser';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutUser();
    navigate('/');
  };
  return (
    <div>
      Welcome to dashboard!
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
