import { Outlet } from 'react-router-dom';

export default function Landing() {
  return (
    <main>
      <h1>Welcome to my Page</h1>
      <Outlet />
    </main>
  );
}
