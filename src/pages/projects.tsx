import Title from '@/components/atoms/title';
import Text from '@/components/atoms/text';
import {
  projectsDescriptionConfig,
  projectsTextConfig,
  projectsTitleConfig,
} from '@/configs/projects.config';
import Subheading from '@/components/atoms/subheading';
import RoundImage from '@/components/atoms/roundImage';
import FeaturedLink from '@/components/atoms/links/featuredLink';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex max-w-2xl flex-col gap-7">
        <Title>{projectsTitleConfig}</Title>
        <Text>{projectsDescriptionConfig}</Text>
      </div>
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projectsTextConfig.map((project) => (
          <li className="relative flex flex-col gap-2 after:absolute after:-inset-x-4 after:-inset-y-6 after:z-0 after:scale-95 after:bg-zinc-800/50 after:opacity-0 after:transition after:hover:scale-100 after:hover:opacity-100 after:sm:-inset-x-6 after:sm:rounded-2xl">
            <RoundImage className="mb-4" image={project.image} />
            <Subheading className="z-10">{project.title}</Subheading>
            <Text className="z-10 text-sm">{project.text}</Text>
            <FeaturedLink
              href={project.link.href}
              className="z-10 mt-4 before:absolute before:-inset-x-4 before:-inset-y-6 before:scale-95 before:transition before:hover:scale-100 before:sm:-inset-x-6 before:sm:rounded-2xl"
            >
              {project.link.text}
            </FeaturedLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
