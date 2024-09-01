import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuIcon } from 'lucide-react';
import Logo from "./logo";

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const display = () => {
    setShow(!show);
  }

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-background p-4 sticky top-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={`hover:text-primary`}>
              Acceuil
            </NavLink>
            <Link to="/functionality" className="hover:text-primary">
              Fonctionnalites
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Button onClick={() => navigate('/auth/login')}>
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MenuIcon className="w-10 h-10 fill-foreground hover:cursor-pointer" onClick={display} />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${show ? 'hidden' : null} md:hidden container mt-2 space-y-5`}>
          <Link to="/" className="block text-foreground hover:text-primary">
            Acceuil
          </Link>
          <Link to="/functionality" className="block text-foreground hover:text-primary">
            Fonctionnalites
          </Link>
          <Link to="/contact" className="block text-foreground hover:text-primary">
            Contact
          </Link>
          <Button onClick={() => navigate('/auth/login')} className="w-full mt-2">
            COMMENCER
          </Button>
        </div>
      </nav>
      <Separator />
    </header>
  );
};