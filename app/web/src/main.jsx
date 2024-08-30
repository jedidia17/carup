import { createRoot } from 'react-dom/client';
import LoginForm from './screens/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './screens/register';
import { ToastContainer } from 'react-toastify';
import Home from './screens/home';
import Layout from './components/layouts/layout';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './screens/contact';
import Functionality from './screens/functionality';


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
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
