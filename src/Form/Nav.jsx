import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  return (
    <>
      <div className="relative grid px-4 py-4 m-0 overflow-hidden text-center text-white bg-gray-900 place-items-center bg-clip-border shadow-gray-900/20">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
          Material Tailwind PRO
        </h5>
        <ToastContainer position={"bottom-right"} />
      </div>
      <nav>
        <ul
          role="tablist"
          className="relative z-0 flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60 w-[calc(80vw)] max-w-[calc(80vw)]"
        >
          <NavLink
            to={"/"}
            className={(e) => (e.isActive ? "bg-white shadow" : "")}
          >
            <li
              role="tab"
              className="relative flex items-center justify-center h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900 w-[calc(40vw)] max-w-[calc(40vw)]"
              data-value="card"
            >
              <div className="z-20 text-inherit">Add Items</div>

              <div
                className="absolute inset-0 z-10 h-full rounded-md"
                data-projection-id="4"
              ></div>
            </li>
          </NavLink>
          <NavLink
            to={"/view"}
            className={(e) => (e.isActive ? "bg-white shadow" : "")}
          >
            <li
              role="tab"
              className="relative flex items-center justify-center h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900 w-[calc(40vw)] max-w-[calc(40vw)]"
              data-value="paypal"
            >
              <div className="z-20 text-inherit">View Your Info</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
