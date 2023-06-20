import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <NavLink to="/detail-form">
          <button type="button" class="btn btn-primary">
            Add item
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
