import React from "react";
import { GetServerSideProps } from "next";

export default function Page({ page }) {
  return (
    <div className="flex flex-col gap-16">
      {page.blocks.map((block, index) => {
        <p>block, index</p>;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const res = await fetch(`http://localhost:3000/api/pages?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      page: data.docs[0],
    },
  };
};
