import LinkIcon from "@atoms/links/linkIcon";
import {
  mailConfig,
  socialNetworksConfig,
} from "@configs/socialNetworks.config";

const SocialNetworksList: React.FC = () => {
  return (
    <ul className="flex flex-col gap-4 lg:pl-20">
      {socialNetworksConfig.map((socialNetwork) => (
        <li key={socialNetwork.id}>
          <LinkIcon
            href={socialNetwork.href}
            icon={socialNetwork.icon}
          >
            {socialNetwork.text}
          </LinkIcon>
        </li>
      ))}
      <li className="mt-4 border-t border-zinc-700/40 pt-8">
        <LinkIcon
          href={mailConfig.href}
          icon={mailConfig.icon}
        >
          {mailConfig.text}
        </LinkIcon>
      </li>
    </ul>
  );
};

export default SocialNetworksList;
