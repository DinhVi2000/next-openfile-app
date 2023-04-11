import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: Props) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />

      {/* info */}
      <title>{title}</title>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description} />

      {/* facebook */}
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content={image}></meta>
      {/* <meta property="og:url" content={domain}></meta> */}
      <meta property="og:description" content={description} />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content={domain} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image}></meta>
    </Head>
  );
};

export default SEO;
