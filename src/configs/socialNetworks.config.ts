import GithubIcon from "@assets/icons/githubIcon";
import LinkedInIcon from "@assets/icons/linkdedInIcon";
import MailIcon from "@assets/icons/mailIcon";
import { IconProps } from "@interfaces/icon";

interface socialNetworkConfig {
  id: number;
  href: string;
  icon: React.FC<IconProps>;
  text: string;
}

export const socialNetworksConfig: socialNetworkConfig[] = [
  {
    id: 1,
    href: "https://github.com/AxelVivite",
    icon: GithubIcon,
    text: "Follow on Github",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/axel-virot/",
    icon: LinkedInIcon,
    text: "Follow on LinkedIn",
  },
];

interface mailConfig {
  href: string;
  icon: React.FC<IconProps>;
  text: string;
}

export const mailConfig: mailConfig = {
  href: "mailto:axel.virot@gmail.com",
  icon: MailIcon,
  text: "axel.virot@gmail.com",
};
