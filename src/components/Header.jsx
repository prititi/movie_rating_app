import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/images/icons8-movie-projector-64.png";
import logo from "../assets/images/MovieImg.jpg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className=" flex items-center justify-around top-0 sticky z-50" style={{ backgroundColor: "#ffff" }}>
      <div className="container m-auto flex flex-col items-start justify-center">
        <img src={logo} alt="logo" className="ml-14 w-24 mt-6 cursor-pointer" onClick={() => navigate("/")} />
      </div>

      <NavLink className=" no-underline w-[40%] md:w-[10%] font-semibold" to="/all-movies">
        All Movies
      </NavLink>
      <NavLink className="no-underline w-[40%] md:w-[10%] font-semibold" to="/my-queue">
        My Queue
      </NavLink>
    </header>
  );
}

export default Header;

