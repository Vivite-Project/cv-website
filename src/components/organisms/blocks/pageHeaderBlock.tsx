import PageHeaderContainer from "@atoms/containers/PageHeaderContainer";
import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";

interface PageHeaderBlock {
  title: string;
  description: string;
}

const PageHeaderBlock: React.FC<PageHeaderBlock> = ({ title, description }) => {
  return (
    <PageHeaderContainer>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </PageHeaderContainer>
  );
};

export default PageHeaderBlock;
