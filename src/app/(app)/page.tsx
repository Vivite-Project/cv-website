import { redirect } from "next/navigation";

const Home: React.FC = async () => {
  redirect("/about");
};

export default Home;
