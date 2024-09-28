import PageHeaderContainer from "@/components/atoms/containers/PageHeaderContainer";
import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import TimelineList from "@organisms/lists/timelineList";
import {
  experiencesDescriptionConfig,
  experiencesTimelinesConfig,
  experiencesTitleConfig,
} from "@configs/pages/experiences.config";

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <PageHeaderContainer>
        <Title>{experiencesTitleConfig}</Title>
        <Text>{experiencesDescriptionConfig}</Text>
      </PageHeaderContainer>
      <TimelineList timelines={experiencesTimelinesConfig} />
    </div>
  );
};

export default Experiences;
