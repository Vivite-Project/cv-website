import { StaticImageData } from 'next/image';
import FranceComp from '@/assets/logos/fc.png';
import MonCEP from '@/assets/logos/mon-cep.png';
import AvenirActifs from '@/assets/logos/avenir-actifs.png';
import USH from '@/assets/logos/ush.png';
import CodeInsider from '@/assets/logos/code-insider.png';
import Vivite from '@/assets/logos/vivite.png';
import GetOut from '@/assets/logos/getout.png';

export const projectsTitleConfig: string = `My web development projects: Bringing ideas to life`;

export const projectsDescriptionConfig: string = `Explore a collection of my web development projects, where I’ve
          tackled a variety of challenges, from building full-scale websites to
          enhancing applications with new features. Each project reflects my
          passion for coding, problem-solving, and continuous learning,
          showcasing my work with technologies like WordPress, Laravel, Drupal,
          Next.js, and more.`;

export interface projectsTextConfig {
  id: number;
  image: { alt: string; src: StaticImageData };
  title: string;
  text: string;
  link: { href: string; text: string };
}

export const projectsTextConfig: projectsTextConfig[] = [
  {
    id: 1,
    image: { alt: 'Logo GetOut', src: GetOut },
    title: 'GetOut',
    text: `I'm working independently for the startup GetOut. My main focus is helping them scrape data on sportive infrastructures worldwide.`,
    link: {
      href: 'https://github.com/AxelVivite/si-query',
      text: 'github.com',
    },
  },
  {
    id: 2,
    image: { alt: 'Logo Vivite Project', src: Vivite },
    title: 'Vivite Project',
    text: `I’m working as a fullstack developer and devops on my own websites. This allows me to learn and apply a broad range of skills.`,
    link: {
      href: 'https://www.vivite.fr/',
      text: 'vivite.fr',
    },
  },
  {
    id: 3,
    image: { alt: 'Logo Avenir Actifs', src: AvenirActifs },
    title: 'Mon Avenir Actifs',
    text: `This project represents my latest work for "France Compétences". I had the opportunity to fully apply my expertise in web development.`,
    link: {
      href: 'https://avenir-actifs.org/',
      text: 'avenir-actifs.org',
    },
  },
  {
    id: 4,
    image: { alt: 'Logo Mon CEP', src: MonCEP },
    title: 'Mon CEP',
    text: `This small project allowed me to dive deeper into my use of Tailwind CSS and RGAA accessibility guidelines.`,
    link: {
      href: 'https://mon-cep.org/',
      text: 'mon-cep.org',
    },
  },
  {
    id: 5,
    image: { alt: 'Logo France Compétences', src: FranceComp },
    title: 'France Compétences',
    text: `As the lead developer on this project, I utilized WordPress with Sage and PHP Laravel to deliver a robust solution.`,
    link: {
      href: 'https://www.francecompetences.fr/',
      text: 'francecompetences.fr',
    },
  },
  {
    id: 6,
    image: { alt: `Logo Union social pour l'habitat`, src: USH },
    title: `Union social pour l'habitat`,
    text: `As a developer in a small, dynamic and agile team, I worked extensively with PHP Symfony and Drupal.`,
    link: {
      href: 'https://www.union-habitat.org/',
      text: 'union-habitat.org',
    },
  },
  {
    id: 7,
    image: { alt: `Logo Code Insider`, src: CodeInsider },
    title: `Code Insider`,
    text: `As an intern, I led the graphical update of the public site for "Code Insider," using React to deliver a fresh, responsive interface.`,
    link: {
      href: 'https://codeinsider.fr/',
      text: 'codeinsider.fr',
    },
  },
];
