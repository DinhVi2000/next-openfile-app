import React, { Fragment, useState } from "react";

import shallow from "zustand/shallow";

import Banner from "@/components/profile/Banner";
import Tabs from "@/components/profile/Tabs";
import Wrapper from "@/components/profile/Wrapper";
import SEO from "@/components/SEO";

import { useBookStore } from "@/store/bookStore";

import MainLayout from "@/layouts/MainLayout";

import { PROFILE_TAB } from "@/utils/constants";

const Account = () => {
  const [currentTab, setCurrentTab] = useState<string>(PROFILE_TAB.COLLECION);

  const { amount, author } = useBookStore((state) => state, shallow);

  console.log("amount ", amount, author);

  return (
    <Fragment>
      <SEO title="Your profile | OpenFile" />
      <MainLayout>
        <Banner />
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Wrapper currentTab={currentTab} />
      </MainLayout>
    </Fragment>
  );
};

export default Account;
