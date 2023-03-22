import { sleep } from "@/utils/helper";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const BoxModal = ({ children }: Props) => {
  useEffect(() => {
    sleep(1).then(() => box_ref?.current?.classList?.add("opacity-100"));
  }, []);

  const box_ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={box_ref}
      className="bg-dark-800 fixed z-30 w-full h-full opacity-0
                 transition-all"
    >
      <div className="w-full h-full flex-center">{children}</div>
    </div>
  );
};

export default BoxModal;
