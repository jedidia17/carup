import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}