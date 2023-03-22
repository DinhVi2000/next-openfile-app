import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import Banner from "@/components/collection/Banner";
import Tabs from "@/components/collection/Tabs";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          <Banner />
          <Tabs />
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
