import { PROFILE_TAB } from "@/utils/constants";
import React, { useState } from "react";

const tab_list = [
  { title: "Collection", value: PROFILE_TAB.COLLECION },
  { title: "File", value: PROFILE_TAB.FILE },
  { title: "Favorited", value: PROFILE_TAB.FAVORITED },
  { title: "Activity", value: PROFILE_TAB.ACTIVITY },
  { title: "More", value: PROFILE_TAB.MORE },
];

const Tabs = ({ currentTab, setCurrentTab }: any) => {
  return (
    <div className="mx-16 flex gap-8 mt-8 mb-6  border-b-[0.5px] border-gray-200">
      {tab_list.map((e, i) => (
        <div
          key={i}
          className={`text-base font-medium pb-2.5 cursor-pointer
           ${currentTab === e?.value && "border-black border-b-[3px]"}`}
          onClick={() => setCurrentTab(e?.value)}
        >
          {e?.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
