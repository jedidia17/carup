import { createRoot } from 'react-dom/client';
import LoginForm from './screens/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './screens/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: '/register',
    element: <RegisterForm />
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
