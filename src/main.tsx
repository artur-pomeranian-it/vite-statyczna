import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Login from './Features/Login/Login';
import './SCSS/main.scss';
import Fallback from './Features/Fallback/Fallback';
import Landing from './Pages/Landing/Landing';
import Register from './Features/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import { store } from './Store';
import PrivateRoot from './Router/PrivateRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoot element={<Dashboard />} />,
  },
  {
    path: '*',
    element: <Fallback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
