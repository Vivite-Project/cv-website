import Image from "@interfaces/image";
import Link from "@interfaces/link";

interface Project {
  id: number;
  image: Image;
  title: string;
  text: string;
  link: Link;
}

export default Project;
