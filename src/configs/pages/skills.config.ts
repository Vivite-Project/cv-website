import Thematic from "@/interfaces/thematic";

export const skillsTitleConfig: string = `A glimpse into the skills and tools I use`;

export const skillsDescriptionConfig: string = `
  This page highlights the various programming languages, frameworks, and tools
  I’ve worked with throughout my projects. These technologies have been
  essential in different aspects of my development, from front-end to back-end
  and infrastructure. While I may not always use them in my current projects,
  they’ve all contributed to shaping my technical expertise over time.`;

export const skillsThematicListConfig: Thematic[] = [
  {
    id: 1,
    title: "Frontend",
    articles: [
      {
        id: 1,
        title: "HTML",
        description: `
          Mastering HTML is the first step toward web development and essential
          for creating well-structured, accessible websites. Needless to say it
          is the stack I utilized the most!`,
      },
      {
        id: 2,
        title: "Vanilla JS & JQuery",
        description: `
          Vanilla JS and jQuery are essential for creating dynamic and
          interactive features on websites without needing a full framework.
          I've used them extensively in non-React projects to handle tasks like
          DOM manipulation, animations, and event handling efficiently across
          browsers.`,
      },
      {
        id: 3,
        title: "ReactJS & NextJS",
        description: `
          I love working with Next.js and ReactJS because they offer a powerful
          combination of flexibility and performance for building modern web
          applications. Their component-based architecture and NextJS
          server-side rendering make development efficient and scalable.`,
      },
      {
        id: 4,
        title: "Blade & Twig templating",
        description: `
          I had to work with Blade and Twig templating systems in several
          projects, and I found them quite manageable. While they differ from
          modern frameworks, they provided a structured way to build dynamic
          web pages effectively.`,
      },
    ],
  },
  {
    id: 2,
    title: "Style",
    articles: [
      {
        id: 1,
        title: "CSS",
        description: `
          CSS is used to control the layout and design of web pages, defining
          elements like colors, fonts, spacing, and positioning. Understanding
          CSS is essential for creating visually appealing, responsive
          websites, allowing developers to ensure a consistent and
          user-friendly experience across devices. Alongside HTML, the stack I
          utilized the most, even indirectly.`,
      },
      {
        id: 2,
        title: "SASS",
        description: `
          I used Sass with the BEM (Block, Element, Modifier) methodology in
          projects, which was enjoyable for its structured approach and
          modularity. However, I found it challenging for maintainability due
          to the complexity it added over time.`,
      },
      {
        id: 3,
        title: "Tailwind",
        description: `
          I love Tailwind because it streamlines the styling process, allowing
          me to design quickly without switching between files. Even though I
          was hesitant at first, it has completely transformed how I approach
          front-end development, making my workflow faster and more efficient.`,
      },
      {
        id: 4,
        title: "BootStrap & co",
        description: `
          I've used toolkit libraries like Bootstrap in various projects, but
          it's not really my style. While they provide quick solutions, I
          prefer more flexible and customizable approaches for front-end
          development.`,
      },
    ],
  },
  {
    id: 4,
    title: "CMS",
    articles: [
      {
        id: 1,
        title: "Drupal",
        description: `
          I discovered CMS with Drupal, and found it quite challenging due to
          its complexity and limited documentation. The steep learning curve
          and cumbersome setup made it a frustrating experience compared to
          other CMS options.`,
      },
      {
        id: 2,
        title: "WordPress",
        description: `
          I enjoyed using WordPress as a CMS with the Roots.io framework
          because of its comprehensive documentation and robust features.
          However, using too many plugins led to project bloat and increased
          complexity, making maintenance more challenging. And don't start me
          on the freemium plugins topic..`,
      },
      {
        id: 3,
        title: "Strapi",
        description: `  
          Strapi is a game-changer for content management due to its flexible,
          headless CMS architecture and user-friendly interface. Its powerful
          features and ease of integration make it a standout choice for modern
          web projects, which make me enjoy it very much!`,
      },
    ],
  },
  {
    id: 5,
    title: "Backend",
    articles: [
      {
        id: 1,
        title: "NextJS",
        description: `
          Next.js excels as a backend solution in fullstack projects due to its
          built-in API routes and server-side rendering capabilities. It
          seamlessly integrates frontend and backend functionality,
          streamlining development and improving performance.`,
      },
      {
        id: 2,
        title: "FastAPI",
        description: `
          I used FastAPI in the past and found it highly enjoyable due to its
          simplicity and speed in building robust APIs. Its automatic
          generation of interactive API documentation and ease of use made the
          development process efficient and satisfying.`,
      },
      {
        id: 3,
        title: "Database",
        description: `
          I have an average understanding of database theory, but my practical
          skills are a bit rusty since I haven't worked with databases directly
          very often. While I grasp the concepts well, hands-on experience has
          been limited.`,
      },
    ],
  },
  {
    id: 6,
    title: "Concepts",
    articles: [
      {
        id: 1,
        title: "RGAA",
        description: `
          In projects where accessibility was mandatory, I had to adapt my
          approach and thoroughly educate myself on RGAA (Référentiel Général
          d'Amélioration de l'Accessibilité). This involved implementing best
          practices and ensuring compliance to create more inclusive and
          accessible web experiences.`,
      },
      {
        id: 2,
        title: "SEO",
        description: `
          SEO is crucial because it improves a website's visibility in search
          engine results, driving more organic traffic and increasing overall
          engagement. As web developers, we contribute by optimizing site
          structure, enhancing load times, and implementing best practices to
          ensure content is easily discoverable and relevant to users.`,
      },
    ],
  },
  {
    id: 7,
    title: "Agile",
    articles: [
      {
        id: 1,
        title: "Jira & Trello",
        description: `
          Jira and Trello are crucial for team collaboration as they provide
          organized, visual project management tools that streamline task
          tracking and workflow. Their ability to manage and prioritize tasks
          effectively enhances team productivity and ensures alignment on
          project goals.`,
      },
      {
        id: 2,
        title: "GIT",
        description: `
          Git must be used correctly in a team effort to ensure efficient
          version control, maintain code integrity, and prevent conflicts.
          Proper usage promotes smooth collaboration, traceable changes, and
          reliable project management throughout the development process.`,
      },
    ],
  },
  {
    id: 8,
    title: "Other languages",
    articles: [
      {
        id: 1,
        title: "C#",
        description: `
          I started my development journey with C# during college! I still keep
          my OpenClassrooms C# book on my bookshelf as a reminder of my early
          learning.`,
      },
      {
        id: 2,
        title: "C & C++",
        description: `
          I truly began my development career at Epitech, where I immersed
          myself in C and C++ programming. This hands-on experience with these
          languages significantly shaped my technical skills and understanding
          of software development.`,
      },
      {
        id: 3,
        title: "Python & Java",
        description: `
          I work with Python on personal projects outside of my professional
          duties, which helps me stay sharp and explore new ideas.
          Additionally, I gained experience with Java during my time at
          Epitech, broadening my programming skill set.`,
      },
      {
        id: 4,
        title: "Godot",
        description: `
          Godot is an open-source game engine renowned for its flexibility in
          developing both 2D and 3D games. I’ve used it primarily for 2D game
          projects in game jams, leveraging GDScript to streamline development
          and create dynamic gameplay experiences.`,
      },
      {
        id: 5,
        title: "French",
        description: `
          I’m not just a coding robot, though my keyboard might make me look
          like one with all the furious tapping! As a native French speaker, I
          also can interact with peoples..`,
      },
      {
        id: 6,
        title: "English",
        description: `
          I’m at a B2 level in English, thanks largely to my programming
          journey and binge-watching shows on Netflix. Combining coding and
          entertainment has been a fun and effective way to improve my
          language skills.`,
      },
    ],
  },
  {
    id: 9,
    title: "Tools",
    articles: [
      {
        id: 1,
        title: "VsCode",
        description: `
          I use VSCode extensively because of its powerful features and
          customizable interface, along with its vast ecosystem of extensions.
          I also appreciate that it’s a free tool, which makes it even more
          appealing for enhancing productivity and enjoyment in coding.`,
      },
      {
        id: 2,
        title: "Fedora & Ubuntu",
        description: `
          I use Fedora and Ubuntu for coding because they provide a
          streamlined, open-source environment with strong developer support
          and customization options. Their stability and flexibility make them
          more enjoyable for programming tasks.`,
      },
      {
        id: 3,
        title: "TS & ESLint",
        description: `
          I love TypeScript for its strong typing system, which enhances code
          reliability and developer productivity. ESLint is equally valuable
          for maintaining code quality and consistency, making it easier to
          adhere to best practices and avoid common errors.`,
      },
      {
        id: 4,
        title: "Prettier",
        description: `
          I love code conformity because it ensures a consistent and organized
          codebase, which enhances readability and maintainability. Prettier is
          invaluable for automating code formatting, reducing styling debates,
          and streamlining the development process.`,
      },
    ],
  },
  {
    id: 10,
    title: "Others",
    articles: [
      {
        id: 1,
        title: "Salesforce",
        description: `
          I’ve worked as an intern Salesforce Administrator and used APEX for
          custom solutions, which was rewarding and allowed me to help others.
          Now, I’m happily hiding from Salesforce Administrator recruiters
          while diving into other tech adventures.`,
      },
      {
        id: 2,
        title: "Atomic Design",
        description: `
          Brad Frost is a visionary for his creation of Atomic Design, which
          revolutionizes how we approach and structure design systems. His
          methodology simplifies and organizes UI components into a scalable,
          systematic framework, making it easier to build consistent and
          maintainable design systems. I love it!`,
      },
    ],
  },
];
