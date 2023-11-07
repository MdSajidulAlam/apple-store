import React, { useState } from "react";
import Icon from "../Icon/Icon";
import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

const Header = () => {
  const [state, setState] = useState<string | null>(null);
  return (
    <section className="fixed top-0 w-full">
      <div className="relative bg-[#1D1D1F] bg-opacity-90 text-white text-xs">
        <nav className="w-[52%] mx-auto flex justify-between items-center h-[44px]">
          <NavLink route="/">
            <Icon name="header_icon" />
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("store")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Store</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("mac")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Mac</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("ipad")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>iPad</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("iphone")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>iPhone</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("watch")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Watch</p>
          </NavLink>
          <NavLink route="/store">
            <p>Vision</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("airpods")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Airpods</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("tvhome")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>TV & Home</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("entertainment")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Entertainment</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("accessories")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Accesssories</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("support")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <p>Support</p>
          </NavLink>
          <NavLink
            className="py-[14px]"
            // onMouseEnter={() => setState("support")}
            // onMouseLeave={() => setState(null)}
            onClick={() => setState("search")}
            route="">
            <Icon name="search_icon" />
          </NavLink>
          <NavLink
            className="py-[14px]"
            onMouseEnter={() => setState("bag")}
            onMouseLeave={() => setState(null)}
            route="/store">
            <Icon name="bag_icon" />
          </NavLink>
        </nav>
        <NavDropDown
          className={`absolute top-10 bg-[#6E6E73] z-50 text-white w-full transition-all ease-in-out duration-500 ${
            state ? "h-[50vh] opacity-100" : "h-0 opacity-0"
          }`}
          nav={state}
        />
      </div>
    </section>
  );
};

export default Header;
