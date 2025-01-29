import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import { useState } from "react";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <button
              onClick={() => {
                alert("Welcome to FoodExpress!");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                alert(
                  "At FoodExpress we display the list of restaurants nearby Koramangala for you to order the best food here !!! "
                );
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                alert("Call us at +00000000");
              }}
            >
              Contact Us
            </button>
          </li>

          <button
            className="login"
            onClick={() => {
              setBtnName((btnName = "Logout"));
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
