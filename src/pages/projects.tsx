import Title from "@atoms/typos/title";
import Text from "@atoms/typos/text";
import {
  projectsDescriptionConfig,
  projectsConfig,
  projectsTitleConfig,
} from "@configs/pages/projects.config";
import HeroContainer from "@atoms/containers/heroContainer";
import ProjectList from "@organisms/projectList";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroContainer>
        <Title>{projectsTitleConfig}</Title>
        <Text>{projectsDescriptionConfig}</Text>
      </HeroContainer>
      <ProjectList projects={projectsConfig} />
    </div>
  );
};

export default Projects;
