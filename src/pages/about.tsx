import Image from 'next/image';
import Title from '@/components/atoms/title';
import Text from '@/components/atoms/text';
import greyAV from '@/assets/images/grey-AV.jpeg';
import LinkIcon from '@/components/atoms/links/linkIcon';
import GithubIcon from '@/assets/icons/githubIcon';
import LinkedInIcon from '@/assets/icons/linkdedInIcon';
import MailIcon from '@/assets/icons/mailIcon';
import { aboutTextConfig, aboutTitleConfig } from '@/configs/about.config';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="py-2 pl-2 pr-2 lg:pl-[5.5rem]">
        <Image
          alt="Photo of axel virot"
          className="aspect-square w-72 rotate-3 rounded-2xl object-cover lg:w-full"
          src={greyAV}
        />
      </div>
      <div className="flex flex-col gap-7 lg:order-first lg:row-span-2">
        <Title>{aboutTitleConfig}</Title>
        {aboutTextConfig.map((element) => (
          <Text key={element.id}>{element.text}</Text>
        ))}
      </div>
      <ul className="flex flex-col gap-4 lg:pl-20">
        <li>
          <LinkIcon href="https://github.com/AxelVivite" icon={GithubIcon}>
            Follow on Github
          </LinkIcon>
        </li>
        <li>
          <LinkIcon
            href="https://www.linkedin.com/in/axel-virot/"
            icon={LinkedInIcon}
          >
            Follow on LinkedIn
          </LinkIcon>
        </li>
        <li className="mt-4 border-t border-zinc-700/40 pt-8">
          <LinkIcon href="mailto:axel.virot@gmail.com" icon={MailIcon}>
            axel.virot@gmail.com
          </LinkIcon>
        </li>
      </ul>
    </div>
  );
};

export default About;
