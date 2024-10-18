import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './navBar.css'
import Logo from "../extra/Logo";
import SearchInput from "./SearchInput";
export default function WeatherNavbar({ city, setCity, handleSearch, title }) {
  return (
    <header className="navbar-fixed-top  d-flex align-items-center bg-dark text-light py-2">
     <div className="d-inline-block col-4"><Logo></Logo></div>
      <div className="d-inline-block fs-6 fw-bold col-4">
        <span>{city},Madhy Pradesh 25&deg;C</span>
      </div>
      <SearchInput></SearchInput>
    </header>
  );
}
