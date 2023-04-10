import { IconAccount, IconUser } from "@/resources/icons";
import React, { ReactNode } from "react";

interface Items {
  label: string;
  handleClick: Function;
  icon: ReactNode;
}

interface Props {
  button: ReactNode;
  items: Items[];
}

const Tippy = ({ button, items }: Props) => {
  return (
    <div className="relative group">
      {button}
      <div
        className="bg-white shadow-lg rounded-xl absolute z-90 right-[-50px] top-16
                   opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
      >
        {items.map(({ icon, label, handleClick }, i) => (
          <div
            className="flex items-end p-4 gap-4 w-[250px] border-gray-100 border-b-[1px] cursor-pointer
                       hover:shadow-lg transition-all"
            key={i}
            onClick={() => handleClick()}
            id="tippy_item"
          >
            {icon}
            <span className="text-lg font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tippy;
