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
          <h2 className="text-3xl text-[#04111D] font-semibold">Yasou</h2>
          <IconVerified className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      {/* artist */}
      <div className="text-base mb-2 text-grey">
        <span>Joined August 2022</span>
      </div>

      {/* desc */}
      <div className="text-base mb-7">
        Armenian-American human, artist and nurse collaborating with the
        Universe.
      </div>
    </div>
  );
};

export default Info;
