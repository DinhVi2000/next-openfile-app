import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { IconLock, IconPublic } from "@/resources/icons";
import IconKeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import { useRef, useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
  icon: any;
}

interface Props {
  options: DropdownOption[];
}

const Dropdown = ({ options }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(contentRef, (e: any) => closeContent(e));

  const [curOption, setCurOption] = useState(options[0]);

  const toggleContent = () => {
    contentRef.current?.classList.toggle("active");
    contentRef.current?.classList.toggle("opacity-100");
  };

  const closeContent = (e: any) => {
    if (document.getElementById("dropdown_wrapper")?.contains(e.target)) return;
    contentRef.current?.classList.remove("active");
    contentRef.current?.classList.remove("opacity-100");
  };

  const handleChangeOption = (optionSelected: any) => {
    setCurOption(optionSelected);
    contentRef.current?.classList.remove("active");
    contentRef.current?.classList.remove("opacity-100");
  };

  return (
    <div
      id="dropdown_wrapper"
      className="w-[86px] min-w-[86px] max-w-[86px] p-3 border border-gray-200 rounded-r-xl cursor-pointer flex items-center gap-1 text-sm relative"
    >
      {/* button */}
      <button
        className="w-full flex items-center justify-between "
        onClick={toggleContent}
      >
        <span>{curOption?.label}</span>
        <IconKeyboardArrowDown className="text-grey" />
      </button>

      {/* content */}
      <div
        ref={contentRef}
        className="rounded-[10px] bg-white shadow-dd absolute z-40 top-full right-[-10px]
                     item no-active opacity-0 transition-all duration-300"
      >
        {/* options */}

        {options.map((e) => (
          <div
            id="option"
            key={e?.value}
            className="p-4 border-b-[1px] border-gray-200 flex items-center gap-2"
            onClick={() => handleChangeOption(e)}
          >
            {e?.icon}
            <span>{e?.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
