import React, { memo, useContext, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { MyContext } from "../utils/MyContextProvider";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ filterIcon }) => {
  const { filterLayer, updateFilterLayer, items } = useContext(MyContext);

  const navigate = useNavigate();

  const filterlayer = () => {
    updateFilterLayer(!filterLayer);
  };

  const logoutAccount = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="header-container">
              <NavLink to="/account">
                <FaCircleUser className="user-icon" />
              </NavLink>
              <NavLink to="/">
                {localStorage.getItem("fullname") === null ? (
                  <h1>Welcome Friend</h1>
                ) : (
                  <h1>{localStorage.getItem("fullname")}</h1>
                )}
              </NavLink>
            </div>
          </li>
          <li>
            <div className="header-container">
              <NavLink to="/cart">
                <button className="cart-button" style={{ margin: "0px" }}>
                  {items?.length > 0 ? <p>{items.length}</p> : null}
                  <FaCartShopping className="user-icon" />
                </button>
              </NavLink>
              {filterIcon === "true" ? (
                <button
                  className="cart-button"
                  onClick={() => filterlayer()}
                  style={{ margin: "0px" }}
                >
                  <IoFilter className="user-icon" />
                </button>
              ) : null}
              {localStorage.getItem("token") !== null ? (
                <button
                  className="logout"
                  style={{ margin: "0px" }}
                  onClick={() => logoutAccount()}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="logout"
                  style={{ margin: "0px" }}
                  onClick={() => logoutAccount()}
                >
                  Login
                </button>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
