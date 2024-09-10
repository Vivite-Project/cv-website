import Navbar from '@/components/molecules/navbar';
import NavbarMobile from '../molecules/navbarMobile';

const Header: React.FC = () => {
  return (
    <header className="content-container mx-auto mt-7 flex h-10 gap-4">
      <Navbar />
      <NavbarMobile />
    </header>
  );
};

export default Header;
