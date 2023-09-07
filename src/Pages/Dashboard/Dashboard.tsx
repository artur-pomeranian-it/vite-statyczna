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
      <br />
      <br />
      <button
        style={{ padding: '1rem', minWidth: '8rem' }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
