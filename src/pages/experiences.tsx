import HeroContainer from "@atoms/containers/heroContainer";
import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import TimelineList from "@/components/organisms/lists/timelineList";
import {
  experiencesDescriptionConfig,
  experiencesTimelinesConfig,
  experiencesTitleConfig,
} from "@configs/pages/experiences.config";

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroContainer>
        <Title>{experiencesTitleConfig}</Title>
        <Text>{experiencesDescriptionConfig}</Text>
      </HeroContainer>
      <TimelineList timelines={experiencesTimelinesConfig} />
    </div>
  );
};

export default Experiences;
