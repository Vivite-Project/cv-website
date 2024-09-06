import Title from '@/components/atoms/title';
import Text from '@/components/atoms/text';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Title>Page not found</Title>
      <Text>Sorry, we couldn’t find the page you’re looking for.</Text>
    </div>
  );
};

export default NotFound;
