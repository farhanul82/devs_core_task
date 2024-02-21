import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/MainNav/Header"; // Importing header component
import SubNavbar from "./components/Header/SubNavbar"; // Importing subnavbar component
import {  Outlet, useLocation, useNavigate } from "react-router-dom"; // Importing necessary hooks and components from react-router-dom

function App() {
  const { pathname } = useLocation(); // Getting current pathname using useLocation hook
  const navigate = useNavigate(); // Getting navigate function using useNavigate hook

  useEffect(() => {
    navigate("/members/application-review"); // Redirecting to "/members/application-review" when the component mounts
  }, []);

  return (
    <div className="p-1 w-full">
      <Header /> {/* Rendering Header component */}
      {pathname.includes("members") ? <SubNavbar /> : false}{" "}
      {/* Rendering SubNavbar component if the pathname includes "members" */}
      <main className="pt-4 px-2">
        <Outlet /> {/* Rendering the child components defined in the routes */}
      </main>
    </div>
  );
}

export default App;
