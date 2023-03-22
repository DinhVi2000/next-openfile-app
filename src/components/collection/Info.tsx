import {
  IconDiscord,
  IconInstagram,
  IconStar,
  IconTelegram,
  IconTwitter,
  IconVerified,
  IconWebsite,
} from "@/resources/icons";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className="mx-16">
      {/* head */}
      <div className=" flex items-center justify-between mb-2">
        {/* name */}
        <div className="flex items-center gap-1">
          <h2 className="text-3xl text-[#04111D] font-semibold">
            Ani Mkhitaryan
          </h2>
          <IconVerified className="w-5 h-5 text-blue-500" />
        </div>

        {/* social */}
        <div className="flex text-black">
          <button className="p-3 h-12 w-12">
            <IconWebsite />
          </button>
          <button className="p-3 h-12 w-12">
            <IconDiscord />
          </button>
          <button className="p-3 h-12 w-12">
            <IconTelegram className="text-white" />
          </button>
          <button className="p-3 h-12 w-12">
            <IconInstagram />
          </button>
          <button className="p-3 h-12 w-12">
            <IconTwitter />
          </button>
          <button className="p-3 h-12 w-12">
            <IconStar />
          </button>
        </div>
      </div>

      {/* artist */}
      <div className="text-base mb-2">
        <span>By </span>
        <Link href={""} className="font-semibold transition-all">
          animkhitaryan
        </Link>
        <IconVerified className="w-3 h-3 text-blue-500 inline-block ml-1" />
      </div>

      {/* statist */}
      <div className="text-base mb-2">
        {/* item */}
        <span>
          Unique items <span className="font-semibold">99</span>
        </span>
        &nbsp;&nbsp;·&nbsp;
        {/* item */}
        <span>
          Total items <span className="font-semibold">638</span>
        </span>
        &nbsp;&nbsp;·&nbsp;
        {/* item */}
        <span>
          Created <span className="font-semibold">Sep 2021</span>
        </span>
        &nbsp;&nbsp;·&nbsp;
        {/* item */}
        <span>
          Creator earnings <span className="font-semibold">10%</span>
        </span>
        &nbsp;&nbsp;·&nbsp;
        {/* item */}
        <span>
          Chain <span className="font-semibold">Ethereum</span>
        </span>
        &nbsp;&nbsp;·&nbsp;
        {/* item */}
        <span>
          Category <span className="font-semibold">Art</span>
        </span>
      </div>

      {/* desc */}
      <div className="text-base mb-7">
        Armenian-American human, artist and nurse collaborating with the
        Universe.
      </div>

      {/* revenue */}
      <div className="flex gap-10">
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">
            122 ETH
          </div>
          <div className="text-sm text-[#707a83]">total volume</div>
        </div>
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">
            0.07 ETH
          </div>
          <div className="text-sm text-[#707a83]">floor price</div>
        </div>
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">
            0.222 ETH
          </div>
          <div className="text-sm text-[#707a83]">best offer</div>
        </div>
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">35%</div>
          <div className="text-sm text-[#707a83]">listed</div>
        </div>
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">301</div>
          <div className="text-sm text-[#707a83]">owners</div>
        </div>
        {/* item */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold leading-4 mb-1">47%</div>
          <div className="text-sm text-[#707a83]">unique owners</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
