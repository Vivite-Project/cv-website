import Timeline from "@interfaces/timeline";

export const experiencesTitleConfig: string = `
  Real-World experiences shaping my web development journey`;

export const experiencesDescriptionConfig: string = `
  Over the past year in a permanent position and through three
  internships, I’ve gained practical experience in web development.
  These roles have provided me with hands-on skills and insights into
  various projects, helping me to continuously improve and adapt in the
  field.`;

export const experiencesTimelinesConfig: Timeline[] = [
  {
    id: 1,
    events: [
      {
        id: 1,
        title: "Fullstack developer at Steamulo",
        text: `
          Developed and launched 3 websites for "France Compétences", including
          the public website, Mon CEP, and Avenir Actifs, using WordPress Sage
          and PHP Laravel. Handled application maintenance and feature
          enhancements for the "Union Sociale pour l’Habitat" project, working
          with Drupal and PHP Symfony.`,
        link: {
          href: "https://steamulo.com/",
          text: "Steamulo website",
        },
        end: new Date(2024, 4 - 1),
        start: new Date(2023, 3 - 1),
      },
      {
        id: 2,
        title: "Fullstack intern at Steamulo",
        text: `
          Joined the team working on the "Union Sociale pour l’Habitat"
          website, contributing until the application’s deployment using Drupal
          and PHP Symfony. Developed a proof of concept (POC) for the "Personal
          Shopper Printemps" application using NextJS and Strapi.`,
        link: {
          href: "https://steamulo.com/",
          text: "Steamulo website",
        },
        end: new Date(2023, 2 - 1),
        start: new Date(2022, 9 - 1),
      },
    ],
  },
  {
    id: 2,
    events: [
      {
        id: 1,
        title: "Frontend and Saleforce intern at Code Insider",
        text: `
          Salesforce administrator with feature development in APEX. Led the
          graphical update of the public site for "Code Insider".`,
        link: {
          href: "https://codeinsider.fr/",
          text: "Code Insider website",
        },
        end: new Date(2021, 7 - 1),
        start: new Date(2021, 4 - 1),
      },
    ],
  },
  {
    id: 3,
    events: [
      {
        id: 1,
        title: "Intern at the DGFIP",
        text: `
          Developed internal web applications, focusing on frontend using
          jQuery and PHP. Created code documentation for the french tax
          calculator which has been developed in C.`,
        link: {
          href: "https://www.economie.gouv.fr/dgfip",
          text: "DGFIP website",
        },
        end: new Date(2019, 12 - 1),
        start: new Date(2019, 9 - 1),
      },
    ],
  },
];
