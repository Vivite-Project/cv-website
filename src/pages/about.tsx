import PhotoAxelVirot from "@assets/images/photo-axel-virot.jpeg";
import TiltedImage from "@atoms/images/tiltedImage";
import Title from "@atoms/typos/title";
import Text from "@atoms/typos/text";
import SocialNetworksList from "@organisms/lists/socialNetworkList";
import { aboutTextConfig, aboutTitleConfig } from "@configs/pages/about.config";

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <TiltedImage
        className="lg:pl-[5.5rem]"
        image={{ alt: "Photo of Axel Virot", src: PhotoAxelVirot }}
      />
      <div className="flex flex-col gap-7 lg:order-first lg:row-span-2">
        <Title>{aboutTitleConfig}</Title>
        {aboutTextConfig.map((element) => (
          <Text key={element.id}>{element.text}</Text>
        ))}
      </div>
      <SocialNetworksList />
    </div>
  );
};

export default About;
