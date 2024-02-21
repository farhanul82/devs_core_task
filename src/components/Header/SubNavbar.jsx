import React, { useEffect, useState } from "react";
import { routes } from "../../constants";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  // Get the current location
  const location = useLocation();
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Redirect logic to handle specific routes
  useEffect(() => {
    // Redirect to '/members/application-review' if the current path is '/members'
    if (location.pathname === "/members") {
      navigate("/members/application-review");
    }
  }, [location]);

  return (
    // Sub-navigation container
    <nav className="flex md:justify-center items-center w-full border-b border-grey-400 left-0">
      <div className="hidden md:block">
        <div className="hidden md:block">
          {/* Sub-navigation links */}
          <div className=" flex items-baseline space-x-4">
            {/* Loop through sub-navigation routes */}
            {routes
              ?.find((route) => location.pathname.includes(route.path)) // Find the route object based on current location
              ?.subNav?.map((route) => (
                <NavLink
                  key={route.id}
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    [
                      isActive
                        ? "border-b border-b-red-500 text-red-500 hover:text-red-500 "
                        : " text-black hover:text-black ",
                    ].concat(" px-3 py-2  text-sm font-medium ")
                  }
                >
                  {route.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
