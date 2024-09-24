import Link from "@atoms/links/link";
import Copyright from "@atoms/typos/copyright";
import { pagesConfig } from "@configs/pages.config";
import clone from "@helpers/clone";

const Footer: React.FC = () => {
  const sortedPages = clone(pagesConfig).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <footer className="border-t border-zinc-700/40 pb-16 pt-10">
      <div className="content-container flex flex-col justify-between gap-8 sm:flex-row">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {sortedPages.map((page) => (
            <li key={page.id}>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <Copyright className="self-center" />
      </div>
    </footer>
  );
};

export default Footer;
