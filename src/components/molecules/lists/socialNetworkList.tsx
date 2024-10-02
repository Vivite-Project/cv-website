import clsx from "clsx";
import { SocialNetworks } from "@/payload-types";

import MailIcon from "@assets/icons/mailIcon";
import LinkIcon from "@atoms/links/linkIcon";
import socialMedia from "@configs/socialMedia.config";

interface SocialNetworksListProps {
  email?: string;
  socialNetworks?: SocialNetworks;
}

const SocialNetworksList: React.FC<SocialNetworksListProps> = ({
  email,
  socialNetworks,
}) => {
  if (!email && (!socialNetworks || socialNetworks.length === 0)) return null;

  return (
    <ul className="flex flex-col gap-4 lg:pl-20">
      {socialNetworks &&
        socialNetworks.map(
          (socialNetwork) =>
            socialNetwork.link && (
              <li key={socialNetwork.id}>
                <LinkIcon
                  href={socialNetwork.link}
                  icon={socialMedia[socialNetwork.socialMedia].icon}
                >
                  {"Follow on " + socialMedia[socialNetwork.socialMedia].name}
                </LinkIcon>
              </li>
            )
        )}
      {email && (
        <li
          className={clsx({
            "mt-4 border-t border-zinc-700/40 pt-8":
              socialNetworks && socialNetworks.length > 0,
          })}
        >
          <LinkIcon
            href={"mailto:" + email}
            icon={MailIcon}
          >
            {email}
          </LinkIcon>
        </li>
      )}
    </ul>
  );
};

export default SocialNetworksList;
