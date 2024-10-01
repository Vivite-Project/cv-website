import { notFound } from "next/navigation";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import dynamic from "next/dynamic";

interface PageProps {
  params: { slug: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const payload = await getPayloadHMR({ config: configPromise });

  const pages = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: params.slug },
    },
  });

  if (pages.docs.length === 0) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-16">
      {pages.docs[0].blocks?.map((block) => {
        const BlockComponent = dynamic(
          () => import("@organisms/blocks/" + block.blockType),
          { ssr: true }
        );
        return (
          <BlockComponent
            key={block.id}
            {...block}
          />
        );
      })}
    </div>
  );
};

export default Page;
