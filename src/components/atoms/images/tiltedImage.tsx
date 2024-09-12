import Image from "next/image";
import clsx from "clsx";
import ImageInterface from "@interfaces/image";

interface TiltedImageProps {
  className?: string;
  image: ImageInterface;
}

const TiltedImage: React.FC<TiltedImageProps> = ({ className, image }) => {
  return (
    <div className={clsx(className, "p-2")}>
      <Image
        alt={image.alt}
        className="aspect-square w-72 rotate-3 rounded-2xl object-cover lg:w-full"
        src={image.src}
      />
    </div>
  );
};

export default TiltedImage;
