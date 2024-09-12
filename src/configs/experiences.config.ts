export const experiencesTitleConfig: string = `Real-World experiences shaping my web development journey`;

export const experiencesDescriptionConfig: string = `Over the past year in a permanent position and through three
          internships, I’ve gained practical experience in web development.
          These roles have provided me with hands-on skills and insights into
          various projects, helping me to continuously improve and adapt in the
          field.`;

export interface experiencesTextConfig {
  id: number;
  start: { datetime: string; text: string };
  end: { datetime: string; text: string };
  works: {
    title: string;
    text: string;
    link: { href: string; text: string };
    start: { datetime: string; text: string };
    end: { datetime: string; text: string };
  }[];
}

export const experiencesTextConfig: experiencesTextConfig[] = [
  {
    id: 1,
    start: {
      datetime: '2022-09',
      text: 'September 2022',
    },
    end: {
      datetime: '2024-04',
      text: 'April 2024',
    },
    works: [
      {
        title: 'Fullstack developer at Steamulo',
        text: `Developed and launched 3 websites for "France Compétences", including the public website, Mon CEP, and Avenir Actifs, using WordPress Sage and PHP Laravel. Handled application maintenance and feature enhancements for the "Union Sociale pour l’Habitat" project, working with Drupal and PHP Symfony.`,
        link: {
          href: 'https://steamulo.com/',
          text: 'Steamulo website',
        },
        start: {
          datetime: '2023-03',
          text: 'March 2023',
        },
        end: {
          datetime: '2024-04',
          text: 'April 2024',
        },
      },
      {
        title: 'Fullstack intern at Steamulo',
        text: `Joined the team working on the "Union Sociale pour l’Habitat" website, contributing until the application’s deployment using Drupal and PHP Symfony. Developed a proof of concept (POC) for the "Personal Shopper Printemps" application using NextJS and Strapi.`,
        link: {
          href: 'https://steamulo.com/',
          text: 'Steamulo website',
        },
        start: {
          datetime: '2022-09',
          text: 'September 2022',
        },
        end: {
          datetime: '2023-02',
          text: 'February 2023',
        },
      },
    ],
  },
  {
    id: 2,
    start: {
      datetime: '2021-04',
      text: 'April 2021',
    },
    end: {
      datetime: '2021-07',
      text: 'August 2021',
    },
    works: [
      {
        title: 'Frontend and Saleforce intern at Code Insider',
        text: `Salesforce administrator with feature development in APEX. Led the graphical update of the public site for "Code Insider".`,
        link: {
          href: 'https://codeinsider.fr/',
          text: 'Code Insider website',
        },
        start: {
          datetime: '2021-04',
          text: 'April 2021',
        },
        end: {
          datetime: '2021-07',
          text: 'August 2021',
        },
      },
    ],
  },
  {
    id: 3,
    start: {
      datetime: '2019-07',
      text: 'August 2019',
    },
    end: {
      datetime: '2019-12',
      text: 'December 2019',
    },
    works: [
      {
        title: 'Intern at the DGFIP',
        text: `Developed internal web applications, focusing on frontend using jQuery and PHP. Created code documentation for the french tax calculator which has been developed in C.`,
        link: {
          href: 'https://www.economie.gouv.fr/dgfip',
          text: 'DGFIP website',
        },
        start: {
          datetime: '2019-07',
          text: 'August 2019',
        },
        end: {
          datetime: '2019-12',
          text: 'December 2019',
        },
      },
    ],
  },
];
