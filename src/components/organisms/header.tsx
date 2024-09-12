import Navbar from "@molecules/navbar/navbar";
import NavbarMobile from "@molecules/navbar/navbarMobile";

const Header: React.FC = () => {
  return (
    <header className="content-container mt-7 flex h-10 justify-center gap-4">
      <Navbar />
      <NavbarMobile />
    </header>
  );
};

export default Header;
