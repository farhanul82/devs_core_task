import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SubNavbar from "../components/Header/SubNavbar";
import Header from "../components/Header/MainNav/Header";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <div className="p-1 w-full">
      <Header />
      {pathname.includes("members") ? <SubNavbar /> : false}
      <main className="pt-4 px-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
