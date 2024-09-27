import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Title>Page not found</Title>
      <Text>Sorry, we couldn’t find the page you’re looking for.</Text>
    </div>
  );
};

export default NotFound;
