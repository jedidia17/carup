import { createRoot } from 'react-dom/client';
import LoginForm from './screens/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './screens/Register';
import { ToastContainer } from 'react-toastify';
import Home from './screens/Home';
import Layout from './components/layouts/Layout';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '/login',
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
