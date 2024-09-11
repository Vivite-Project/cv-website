import StaticLink from '@/components/atoms/links/staticLink';
import Subheading from '@/components/atoms/subheading';
import Text from '@/components/atoms/text';
import Title from '@/components/atoms/title';
import TimePeriod from '@/components/molecules/timePeriod';
import {
  experiencesDescriptionConfig,
  experiencesTextConfig,
  experiencesTitleConfig,
} from '@/configs/experiences.config';

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex max-w-2xl flex-col gap-7">
        <Title>{experiencesTitleConfig}</Title>
        <Text>{experiencesDescriptionConfig}</Text>
      </div>
      <div className="md:border-l md:border-zinc-700/40 md:pl-6">
        <ul className="flex max-w-3xl flex-col gap-16">
          {experiencesTextConfig.map((experience) => (
            <li className="md:grid md:grid-cols-4 md:items-baseline">
              <TimePeriod
                className="hidden md:flex"
                period={{ start: experience.start, end: experience.end }}
              />
              <div className="relative flex flex-col gap-2 after:absolute after:-inset-x-4 after:-inset-y-6 after:z-0 after:scale-95 after:bg-zinc-800/50 after:opacity-0 after:transition after:hover:scale-100 after:hover:opacity-100 after:sm:-inset-x-6 after:sm:rounded-2xl md:col-span-3">
                <TimePeriod
                  className="z-10 md:hidden"
                  period={{ start: experience.start, end: experience.end }}
                />
                <Subheading className="z-10">{experience.title}</Subheading>
                <Text className="z-10">{experience.text}</Text>
                <StaticLink
                  href={experience.link.href}
                  className="z-10 mt-4 before:absolute before:-inset-x-4 before:-inset-y-6 before:scale-95 before:transition before:hover:scale-100 before:sm:-inset-x-6 before:sm:rounded-2xl"
                >
                  {experience.link.text}
                </StaticLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
