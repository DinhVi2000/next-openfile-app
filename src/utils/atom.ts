import { atom } from "jotai";

const themeAtom = atom("light");

const themeColorAtom = atom((get) =>
  get(themeAtom) === "light" ? "white" : "gray-500"
);

export { themeAtom, themeColorAtom };
