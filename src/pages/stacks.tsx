import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import {
  stacksDescriptionConfig,
  stacksTitleConfig,
} from "@configs/pages/stacks.config";

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex max-w-2xl flex-col gap-7">
        <Title>{stacksTitleConfig}</Title>
        <Text>{stacksDescriptionConfig}</Text>
      </div>
    </div>
  );
};

export default Experiences;
