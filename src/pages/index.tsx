import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import Banner from "@/components/collection/Banner";
import Tabs from "@/components/collection/Tabs";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import axios from "axios";

export default function Home({ data }: any) {
  console.log("data :", data);
  useEffect(() => {
    const str = "1oiG";
    const array1 = [/\d/, /[a-z]/, /[A-Z]/];

    // 0 + 1 + 2 + 3 + 4
    let initVal = true;
    const sumWithInitial = array1.reduce((acc, cur, index, arr): any => {
      if (!cur.test(str)) acc = false;
    }, initVal);

    return () => {};
  }, []);

  const title = "test";

  return (
    <>
      <SEO title={data?.title} description="Open file description" />
      <MainLayout>
        <div>
          <Banner />
          <Tabs />
          <Link href={"/about"}>about</Link>
        </div>
      </MainLayout>
    </>
  );
}

export async function getStaticProps(context: any) {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("data :", data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
