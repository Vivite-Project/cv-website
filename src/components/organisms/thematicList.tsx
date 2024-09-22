import Subheading from "@atoms/typos/subheading";
import Text from "@atoms/typos/text";
import Thematic from "@interfaces/thematic";
import HeadingThree from "@atoms/typos/headingThree";

interface ThematicListProps {
  thematics: Thematic[];
}

const ThematicList: React.FC<ThematicListProps> = ({ thematics }) => {
  return (
    <div className="flex max-w-3xl flex-col gap-16 md:gap-20">
      {thematics.map((thematic) => (
        <section
          key={thematic.id}
          className="flex flex-col gap-y-8 md:grid md:grid-cols-4 md:items-baseline md:border-l md:border-zinc-700/40 md:pl-6"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="block h-4 w-0.5 bg-zinc-200 md:hidden"
            />
            <Subheading className="text-sm tracking-normal">
              {thematic.title}
            </Subheading>
          </div>
          <ul className="flex flex-col gap-y-16 md:col-start-2 md:col-end-5">
            {thematic.articles.map((article) => (
              <li
                key={article.id}
                className="relative flex flex-col gap-2"
              >
                <HeadingThree>{article.title}</HeadingThree>
                <Text className="text-sm">{article.description}</Text>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ThematicList;
