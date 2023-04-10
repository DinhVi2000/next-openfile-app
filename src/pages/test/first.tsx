import { themeAtom, themeColorAtom } from "@/utils/atom";
import { atom, useAtom } from "jotai";
import React from "react";

const FirstPage = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [themeColor] = useAtom(themeColorAtom);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <main>
      <p className="mr-2">Them is {theme}</p>
      <button onClick={toggleTheme} className={`bg-${themeColor} `}>
        Toggle
      </button>
    </main>
  );
};

export default FirstPage;
