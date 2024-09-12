interface PageConfigProps {
  id: number;
  href: string;
  name: string;
}

export const pagesConfig: PageConfigProps[] = [
  { id: 1, href: "/about", name: "About" },
  { id: 2, href: "/experiences", name: "Experiences" },
  { id: 3, href: "/projects", name: "Projects" },
  { id: 4, href: "/stacks", name: "Stacks" },
  { id: 5, href: "/contact", name: "Contact" },
];
