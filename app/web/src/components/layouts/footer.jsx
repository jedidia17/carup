import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';


export default function Footer() {
  return (
    <footer className="bg-background">
      <Separator />
      <div className="container py-10">
        <div className='flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between'>
          {/* Column 2: Navigation Links */}
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:underline">Acceuil</Link>
            </li>
            <li>
              <Link to="/functionality" className="hover:underline">Fonctionnalites</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
          {/* Column 3: Social Media */}

          <div className="flex items-center gap-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              {/* Add your preferred social media icons here */}
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.943 4.943 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195A4.927 4.927 0 0016.616 3c-2.72 0-4.926 2.205-4.926 4.924 0 .387.045.765.127 1.124C7.688 8.847 4.064 6.918 1.64 3.954a4.908 4.908 0 00-.666 2.475c0 1.71.869 3.213 2.188 4.096A4.932 4.932 0 01.96 9.79v.063a4.928 4.928 0 003.95 4.827 4.933 4.933 0 01-2.212.084 4.928 4.928 0 004.602 3.417A9.864 9.864 0 010 21.54a13.92 13.92 0 007.548 2.212c9.055 0 14.001-7.496 14.001-13.986 0-.213-.005-.426-.014-.637A9.99 9.99 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.916c-1.504 0-1.795.715-1.795 1.764v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
          {/* Copyright Notice */}
          <div className="flex items-center text-gray-500">
            &copy; {new Date().getFullYear()} Sofia. All rights reserved.
          </div>
        </div>
      </div>
    </footer >
  );
};