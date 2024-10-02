import { SocialNetworks, Media, Paragraphs } from "@/payload-types";

import TiltedImage from "@atoms/images/tiltedImage";
import Title from "@atoms/typos/title";
import Text from "@atoms/typos/text";
import SocialNetworksList from "@molecules/lists/socialNetworkList";

interface AboutBlock {
  title: string;
  paragraphs: Paragraphs;
  image?: Media;
  socialNetworks?: SocialNetworks;
  email?: string;
}

const AboutBlock: React.FC<AboutBlock> = ({
  title,
  paragraphs,
  image,
  socialNetworks,
  email,
}) => {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      {image && (
        <TiltedImage
          className="lg:pl-[5.5rem]"
          image={image}
        />
      )}
      <div className="flex flex-col gap-7 lg:order-first lg:row-span-2">
        <Title>{title}</Title>
        {paragraphs.map((paragraph, index) => (
          <Text key={paragraph.id ?? index}>{paragraph.text}</Text>
        ))}
      </div>
      <SocialNetworksList
        email={email}
        socialNetworks={socialNetworks}
      />
    </div>
  );
};

export default AboutBlock;
