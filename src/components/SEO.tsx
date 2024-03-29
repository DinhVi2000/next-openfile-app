import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const SEO = ({
  title,
  description,
  image = "https://h5.4j.com/thumb/Fastlane-Road-To-Revenge-Online.jpg",
}: Props) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
        name="keywords"
        content="openfile, open file, manage your file, vind1905"
      ></meta>

      {/* info */}
      <title>{title || "default title"}</title>
      <meta name="title" content={title || "default title"}></meta>
      <meta name="description" content={description} />

      {/* facebook */}
      <meta property="og:title" content={title || "default title"}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:description" content={description} />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image}></meta>
    </Head>
  );
};

export default SEO;
