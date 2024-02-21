import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../constants";
import Button from "../../Shared/Button";
import { PiPrinterDuotone } from "react-icons/pi";
import Hamburger from "hamburger-react";
import RoutesSubNav from "./RoutesSubNav";

const Header = () => {
  // State for controlling the main navigation and sub-navigation visibility
  const [isOpen, setOpen] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  // Function to handle click on navigation link
  const handleClickNavLick = (route) => {
    if (route?.subNav) {
      // If the route has a sub-navigation, open the sub-navigation
      setIsSubNavOpen(true);
    } else {
      // If the route doesn't have a sub-navigation, close both main and sub-navigation
      setIsSubNavOpen(false);
      setOpen(false);
    }
  };

  return (
    // Header container with conditional styling based on isOpen state
    <div className={isOpen ? ` border  border-gray-400 rounded-lg` : ""}>
      {/* Main header content */}
      <div
        className={`flex justify-between items-center w-full left-1 py-2 top-1 px-2 ${
          isOpen ? "" : "border  border-gray-400 rounded-lg"
        }`}
      >
        {/* Main navigation for larger screens */}
        <nav className="hidden sm:block">
          <div className="sm:flex items-center justify-between  hidden ">
            <div className=" flex items-baseline space-x-4">
              {/* Loop through routes to create navigation links */}
              {routes.map((route) => (
                <NavLink
                  key={route.id}
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    [
                      isActive
                        ? "bg-gray-700 text-white hover:text-white "
                        : " text-black hover:text-black ",
                    ].concat(" px-3 py-2 rounded-md text-sm font-medium ")
                  }
                >
                  {route.title}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Button for printing */}
        <Button text="Print" icon={<PiPrinterDuotone />} />

        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Sub-navigation for mobile */}
      <div
        id={`dropdown`}
        className={`sm:hidden  py-2 origin-top transition ease duration-200
          ${isOpen ? "scale-1 transition  duration-200 in-expo" : "scale-0 hidden"}`}
      >
        <div className="flex flex-col justify-center items-center">
          {/* Loop through routes to create navigation links for mobile */}
          {routes.map((route) => (
            <>
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive, isPending }) =>
                  [
                    isActive
                      ? "bg-gray-700 text-white hover:text-white "
                      : " text-black hover:text-black ",
                  ].concat(
                    " px-3 py-2 rounded-md text-sm font-medium w-full text-center"
                  )
                }
                onClick={(e) => handleClickNavLick(route)}
              >
                {route.title}
              </NavLink>

              {/* Render sub-navigation component if route has sub-navigation */}
              <RoutesSubNav
                route={route}
                isSubNavOpen={isSubNavOpen}
                setOpen={setOpen}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
