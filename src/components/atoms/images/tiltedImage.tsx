import Image from "next/image";
import clsx from "clsx";
import { Media } from "@/payload-types";

interface TiltedImageProps {
  className?: string;
  image: Media;
}

const TiltedImage: React.FC<TiltedImageProps> = ({ className, image }) => {
  return (
    <div className={clsx(className, "w-72 p-2 lg:w-full")}>
      <Image
        alt={image.text ?? ""}
        className="aspect-square rotate-3 rounded-2xl object-cover"
        src={image.url ?? ""}
        width={image.width ?? undefined}
        height={image.height ?? undefined}
      />
    </div>
  );
};

export default TiltedImage;
