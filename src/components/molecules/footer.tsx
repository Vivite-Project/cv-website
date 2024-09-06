import Link from '@/components/atoms/link';
import Copyright from '@/components/atoms/copyright';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-700/40 pb-16 pt-10">
      <div className="content-container flex justify-between">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/hobbies">Hobbies</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
