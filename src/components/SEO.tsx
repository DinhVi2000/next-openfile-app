import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* facebook */}
      <meta data-react-helmet="true" property="og:title" content={title}></meta>
      <meta
        data-react-helmet="true"
        property="og:description"
        content={description}
      ></meta>
      <meta data-react-helmet="true" property="og:locale" content="en"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
