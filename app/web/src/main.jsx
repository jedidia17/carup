import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './screens/home';
import AuthLayout from './components/layouts/authLayout';
import Layout from './components/layouts/layout';
import Contact from './screens/contact';
import Functionality from './screens/functionality';
import LoginForm from './screens/login';
import RegisterForm from './screens/register';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import ProctedLayout from './components/layouts/protectedLayout';
import Dashboard from './screens/dashboard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/functionality',
        element: <Functionality />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LoginForm />
      },
      {
        path: '/auth/register',
        element: <RegisterForm />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <ProctedLayout />,
    children: [
      {
        path: '/dashboard/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <div>Page not found</div>
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
