import { Media, Projects } from "@/payload-types";

import RoundImage from "@atoms/images/roundImage";
import BaseUrlLink from "@atoms/links/baseUrlLink";
import Subheading from "@atoms/typos/subheading";
import Text from "@atoms/typos/text";

interface ProjectListBlockProps {
  projects: Projects;
}

const ProjectListBlock: React.FC<ProjectListBlockProps> = ({ projects }) => {
  return (
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li
          key={project.id}
          className="relative flex flex-col gap-2 after:absolute after:-inset-x-4 after:-inset-y-6 after:z-0 after:scale-95 after:bg-zinc-800/50 after:opacity-0 after:transition after:hover:scale-100 after:hover:opacity-100 after:sm:-inset-x-6 after:sm:rounded-2xl"
        >
          <RoundImage
            className="mb-4"
            image={project.image as Media}
          />
          <Subheading className="z-10">{project.title}</Subheading>
          <Text className="z-10 text-sm">{project.description}</Text>
          <BaseUrlLink
            href={project.link}
            className="z-10 mt-4 before:absolute before:-inset-x-4 before:-inset-y-6 before:scale-95 before:transition before:hover:scale-100 before:sm:-inset-x-6 before:sm:rounded-2xl"
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectListBlock;
