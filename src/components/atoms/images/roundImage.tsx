import Image from "next/image";

import clsx from "clsx";
import { Media } from "@/payload-types";

interface RoundImageProps {
  className?: string;
  image: Media;
}

const RoundImage: React.FC<RoundImageProps> = ({ className, image }) => {
  return (
    <div
      className={clsx(
        className,
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5"
      )}
    >
      <Image
        alt={image.text ?? ""}
        className="h-8 w-8 rounded-full"
        src={image.url ?? ""}
        width={image.width ?? undefined}
        height={image.height ?? undefined}
      />
    </div>
  );
};

export default RoundImage;
