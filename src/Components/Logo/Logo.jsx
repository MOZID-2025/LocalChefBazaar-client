import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end font-bold">
        <img className="h-12 w-12" src={logo} alt="" />
        <h3 className="text-2xl">Local Chef Bazaar </h3>
      </div>
    </Link>
  );
};

export default Logo;
