import React from "react";

import { atom } from "jotai";

const TestPage = () => {
  const priceAtom = atom(10);
  const messageAtom = atom("hello");
  const productAtom = atom({ id: 12, name: "good stuff" });

  console.log("priceAtom :", priceAtom);
  return <div className="flex justify-center">Test</div>;
};

export default TestPage;
