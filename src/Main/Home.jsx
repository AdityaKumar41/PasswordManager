import React from "react";
import Nav from "../Form/Nav";
import View from "../Form/View";
import { Route } from "react-router-dom";

const Home = ({ children }) => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      {children}
    </>
  );
};

export default Home;
