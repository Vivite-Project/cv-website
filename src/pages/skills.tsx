import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import ThematicList from "@organisms/lists/thematicList";
import {
  skillsDescriptionConfig,
  skillsThematicListConfig,
  skillsTitleConfig,
} from "@/configs/pages/skills.config";

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex max-w-2xl flex-col gap-7">
        <Title>{skillsTitleConfig}</Title>
        <Text>{skillsDescriptionConfig}</Text>
      </div>
      <ThematicList thematics={skillsThematicListConfig} />
    </div>
  );
};

export default Experiences;
