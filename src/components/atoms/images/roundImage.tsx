import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import ImageInterface from "@interfaces/image";

interface RoundImageProps {
  className?: string;
  image: ImageInterface;
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
        alt={image.alt}
        className="h-8 w-8 rounded-full"
        src={image.src}
      />
    </div>
  );
};

export default RoundImage;
