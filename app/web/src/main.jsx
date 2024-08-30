import { createRoot } from 'react-dom/client';
import LoginForm from './screens/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './screens/Register';
import { ToastContainer } from 'react-toastify';
import Home from './screens/Home';
import Layout from './components/layouts/layout';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './screens/Contact';
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
