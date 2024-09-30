import { ContainerProps } from "@interfaces/container";

const PageHeaderContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex max-w-2xl flex-col gap-7">{children}</div>;
};

export default PageHeaderContainer;
