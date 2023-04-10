import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import Banner from "@/components/collection/Banner";
import Tabs from "@/components/collection/Tabs";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const str = "1oiG";
    const array1 = [/\d/, /[a-z]/, /[A-Z]/];

    // 0 + 1 + 2 + 3 + 4
    let initVal = true;
    const sumWithInitial = array1.reduce((acc, cur, index, arr): any => {
      console.log("index :", index);
      console.log("cur :", cur);
      console.log("acc :", acc);
      console.log("arr :", arr);

      console.log("cur.test(str) :", cur.test(str));
      if (!cur.test(str)) acc = false;
    }, initVal);
    console.log("sumWithInitial :", sumWithInitial);

    return () => {};
  }, []);

  const title = "test";

  return (
    <>
      <Head>
        <title>{title || "Openfile | file online web"}</title>
      </Head>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof window !== "undefined") localStorage.getItem("token");

  return {
    props: {}, // will be passed to the page component as props
  };
}
