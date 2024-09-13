import Subheading from "@atoms/typos/subheading";
import Text from "@atoms/typos/text";
import Thematic from "@interfaces/thematic";
import HeadingThree from "@atoms/typos/headingThree";

interface ThematicListProps {
  thematics: Thematic[];
}

const ThematicList: React.FC<ThematicListProps> = ({ thematics }) => {
  return (
    <ul className="flex max-w-3xl flex-col gap-16 md:gap-20">
      {thematics.map((thematic) => (
        <li
          key={thematic.id}
          className="flex flex-col gap-y-16 md:grid md:grid-cols-4 md:items-baseline md:border-l md:border-zinc-700/40 md:pl-6"
        >
          <Subheading className="text-sm tracking-normal">
            {thematic.title}
          </Subheading>
          {thematic.articles.map((article) => (
            <div
              key={article.id}
              className="relative flex flex-col gap-2 md:col-start-2 md:col-end-5"
            >
              <HeadingThree>{article.title}</HeadingThree>
              <Text className="text-sm">{article.description}</Text>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default ThematicList;
