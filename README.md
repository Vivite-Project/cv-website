# Vivite Project: CV website

My CV website, hosted at axel-virot.vivite.fr, is a fully functional showcase of my web development skills, built with Next.js. The design has been inspired by the spotlight TailwindUI template. It is designed to provide a comprehensive overview of my professional experience, skills, and projects.

The site features five main sections:

1. About Page: This section provides a summary of who I am, my background, and my journey as a developer. It introduces my passion for technology and coding, highlighting my dedication to continuous learning and improvement.

2. Experiences Page: Here, I detail my work history, focusing on key roles and responsibilities. Each entry emphasizes the technologies and frameworks I've worked with, showcasing my ability to adapt to different environments and challenges.

3. Projects Page: This section highlights the various projects I've worked on, including personal and professional projects. Each project entry includes descriptions of the goals, tools, nor technologies used.

4. Skills Page: A breakdown of my technical skills across multiple areas, from front-end to back-end development, including proficiency in frameworks, languages, and tools.

5. Contact Page: This page allows visitors to reach out to me directly through a contact form, which is integrated with resend, demonstrating the ability to handle back-end functionality like form submissions and email communication using modern web technologies.

The website is designed for both performance and scalability, with a responsive layout ensuring a seamless user experience across devices. As a self-hosted platform, it also demonstrates my expertise in DevOps and server management, providing a full end-to-end solution for web development.

## Run Locally

Clone the project

```bash
  git clone git@github.com:Vivite-Project/cv-website.git
```

Go to the project directory

```bash
  cd cv-website
```

Install dependencies

```bash
  npm install
```

Setup the environment

```bash
  cp .env.example .env.local
  nano .env.local
```

Start the server

```bash
  npm run dev
```

## Deployment

Setup the environment

```bash
  cp .env.example .env.local
  nano .env.local
```

Start the project container

```bash
  docker compose up -d
```

## Roadmap

- Add DarkMode toggle

- Add a translation to french

- Add PayloadJS as a CMS

## Tech Stack

**Client:** NextJS, Typescript, TailwindCSS, Github Actions, Docker

## Acknowledgements

 - [Spotlight template](https://spotlight.tailwindui.com/)
 - [Email service provider](https://resend.com/)

## Authors

- [Axel Virot](https://www.github.com/AxelVivite)

## License

This project is licensed under the MIT License - see the LICENSE.md file for
details
