import React from "react";
import Home from "./Main/Home";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import Sidebar from "./Main/Sidebar";
import FormContent from "./Form/Form";
import { Outlet } from "react-router-dom";
import Nav from "./Form/Nav";

const App = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="">
        <Home>
          <Nav></Nav>
          <Outlet />
        </Home>

        <Footer />
      </div>
    </div>
  );
};

export default App;
