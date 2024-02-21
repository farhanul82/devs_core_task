import React from "react";
import { NavLink } from "react-router-dom";

const RoutesSubNav = ({ route, isSubNavOpen, setOpen }) => {
  return (
    <div>
      {route.subNav ? (
        <div
          id={`dropdown_subNav`}
          className="transition-opacity duration-300 ease-in-out  w-full text-center"
          style={{
            opacity: isSubNavOpen ? 1 : 0,
            maxHeight: isSubNavOpen ? "14rem" : 0,
          }}
        >
          <div className="flex flex-col justify-center items-center ">
            {route.subNav.map((route) => (
              <>
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
                  onClick={(e) => {
                    setOpen(false);
                  }}
                >
                  {route.title}
                </NavLink>
              </>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RoutesSubNav;
