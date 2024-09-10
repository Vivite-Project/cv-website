export interface PageConfig {
  id: number;
  href: string;
  name: string;
}

export const pagesConfig: PageConfig[] = [
  { id: 1, href: '/about', name: 'About' },
  { id: 2, href: '/contact', name: 'Contact' },
  { id: 3, href: '/hobbies', name: 'Hobbies' },
  { id: 4, href: '/projects', name: 'Projects' },
  { id: 5, href: '/experiences', name: 'Experiences' },
];
