import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }
  return (
    <header>
      <nav className="bg-background p-4 sticky top-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">Logo</Link>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-700">
              Acceuil
            </Link>
            <Link to="/functionality" className="hover:text-gray-700">
              Fonctionnalites
            </Link>
            <Link to="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Button onClick={handleClick}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {/* You can use a menu icon like Heroicons */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/about" className="block text-gray-700">
            About
          </Link>
          <Link to="/services" className="block text-gray-700">
            Services
          </Link>
          <Link to="/contact" className="block text-gray-700">
            Contact
          </Link>
          <Button onClick={navigate('/login')} className="w-full mt-2">
            Get Started
          </Button>
        </div>
      </nav>
      <Separator />
    </header>
  );
};