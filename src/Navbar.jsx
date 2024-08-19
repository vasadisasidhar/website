import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navSection">
      <ul>
        <Link to="/firstpage">
          <li>First Page</li>
        </Link>

        <Link to="/secondpage">
          <li>Second Page</li>
        </Link>

        <Link to="/thirdpage">
          <li>Third Page</li>
        </Link>

        <Link to="/fourthpage">
          <li>Fourth Page</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
