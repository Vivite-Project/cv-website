import { Page } from "@/payload-types";

import Link from "@atoms/links/link";
import Copyright from "@atoms/typos/copyright";
import clone from "@helpers/clone";

interface FooterProps {
  pages: Page[];
}

const Footer: React.FC<FooterProps> = ({ pages }) => {
  const sortedPages = clone(pages).sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <footer className="border-t border-zinc-700/40 pb-16 pt-10">
      <div className="content-container flex flex-col justify-between gap-8 sm:flex-row">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {sortedPages.map((page) => (
            <li key={page.id}>
              <Link href={"/" + page.slug}>{page.title}</Link>
            </li>
          ))}
        </ul>
        <Copyright className="self-center" />
      </div>
    </footer>
  );
};

export default Footer;
