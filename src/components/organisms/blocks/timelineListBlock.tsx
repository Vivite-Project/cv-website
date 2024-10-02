import { Timelines } from "@/payload-types";

import StaticLink from "@atoms/links/staticLink";
import Subheading from "@atoms/typos/subheading";
import Text from "@atoms/typos/text";
import TimePeriod from "@molecules/timePeriod";

interface TimelineListBlockProps {
  timelines: Timelines;
}

const TimelineListBlock: React.FC<TimelineListBlockProps> = ({ timelines }) => {
  return (
    <ul className="flex max-w-3xl flex-col gap-16 md:gap-20">
      {timelines.map((timeline) => (
        <li
          key={timeline.id}
          className="flex flex-col gap-y-16 md:grid md:grid-cols-4 md:items-baseline md:border-l md:border-zinc-700/40 md:pl-6"
        >
          <TimePeriod
            className="hidden md:flex"
            end={timeline.events[0].endDate}
            start={timeline.events[timeline.events.length - 1].startDate}
          />
          {timeline.events.map((event) => (
            <div
              key={event.id}
              className="relative flex flex-col gap-2 after:absolute after:-inset-x-4 after:-inset-y-6 after:z-0 after:scale-95 after:bg-zinc-800/50 after:opacity-0 after:transition after:hover:scale-100 after:hover:opacity-100 after:sm:-inset-x-6 after:sm:rounded-2xl md:col-start-2 md:col-end-5"
            >
              <TimePeriod
                className="z-10 md:hidden"
                end={event.endDate}
                start={event.startDate}
              />
              <Subheading className="z-10">{event.title}</Subheading>
              <Text className="z-10 text-sm">{event.description}</Text>
              <StaticLink
                href={event.link}
                className="z-10 mt-4 before:absolute before:-inset-x-4 before:-inset-y-6 before:scale-95 before:transition before:hover:scale-100 before:sm:-inset-x-6 before:sm:rounded-2xl"
              >
                {event.linkLabel}
              </StaticLink>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default TimelineListBlock;
