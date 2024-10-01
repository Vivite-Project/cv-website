import { Page } from "@/payload-types";

import clone from "@helpers/clone";
import Navbar from "@molecules/navbar/navbar";
import NavbarMobile from "@molecules/navbar/navbarMobile";

interface FilteredPages extends Omit<Page, "navigationOrder"> {
  navigationOrder: number;
}

interface HeaderProps {
  pages: Page[];
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
  /*
   ** Filter pages to only show pages in navigation
   ** Sort them by navigation order
   ** Enforce navigationOrder to be NonNullable
   */
  const filteredPages = pages.filter(
    (page) => page.inNavigation && page.navigationOrder
  ) as FilteredPages[];
  const sortedPages = clone(filteredPages).sort((a, b) => {
    return a.navigationOrder - b.navigationOrder;
  });

  return (
    <header className="content-container mt-7 flex h-10 justify-center gap-4">
      {sortedPages.length > 0 && (
        <>
          <Navbar pages={sortedPages} />
          <NavbarMobile pages={sortedPages} />
        </>
      )}
    </header>
  );
};

export default Header;
