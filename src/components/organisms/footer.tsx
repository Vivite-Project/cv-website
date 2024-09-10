import Link from '@/components/atoms/links/link';
import Copyright from '@/components/atoms/copyright';
import { pagesConfig } from '@/configs/pages.config';

const Footer: React.FC = () => {
  const sortedPages = structuredClone(pagesConfig).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <footer className="border-t border-zinc-700/40 pb-16 pt-10">
      <div className="content-container flex justify-between">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {sortedPages.map((page) => (
            <li key={page.id}>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
