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
import ProctedLayout from './components/layouts/protectedLayout';
import Dashboard from './screens/dashboard';
import Profile from './screens/profile';
import Manage from './screens/manage';
import Schedule from './screens/schedule';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';


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
      },
      {
        path:'/dashboard/profile',
        element: <Profile />
      },
      {
        path:'/dashboard/manage',
        element: <Manage />
      },
      {
        path:'/dashboard/schedule',
        element: <Schedule />
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
