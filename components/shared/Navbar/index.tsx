import React, { useState } from "react";
import Icon from "../Icon/Icon";
import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

const Header = () => {
  const [state, setState] = useState<string | null>(null);
  return (
    <div className="relative bg-[#1D1D1F] text-white text-xs">
      <nav className="flex justify-center items-center gap-8">
        <NavLink route="/">
          <Icon name="header_icon" />
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("store")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Store</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("mac")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Mac</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("ipad")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>iPad</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("iphone")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>iPhone</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("watch")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Watch</p>
        </NavLink>
        <NavLink route="/store">
          <p>Vision</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("airpods")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Airpods</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("tvhome")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>TV & Home</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("entertainment")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Entertainment</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("accessories")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Accesssories</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setState("support")}
          onMouseLeave={() => setState(null)}
          route="/store">
          <p>Support</p>
        </NavLink>
      </nav>
      <NavDropDown
        className={`absolute top-10 bg-black text-white w-full transition-all ease-in-out duration-500 ${
          state ? "h-[50vh] opacity-100" : "h-0 opacity-0"
        }`}
        nav={state}
      />
    </div>
  );
};

export default Header;
