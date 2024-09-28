import Title from "@atoms/typos/title";
import Text from "@atoms/typos/text";
import {
  projectsDescriptionConfig,
  projectsConfig,
  projectsTitleConfig,
} from "@configs/pages/projects.config";
import PageHeaderContainer from "@/components/atoms/containers/PageHeaderContainer";
import ProjectList from "@organisms/lists/projectList";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <PageHeaderContainer>
        <Title>{projectsTitleConfig}</Title>
        <Text>{projectsDescriptionConfig}</Text>
      </PageHeaderContainer>
      <ProjectList projects={projectsConfig} />
    </div>
  );
};

export default Projects;
