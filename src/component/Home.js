import React from "react";
import { NavLink } from "react-router-dom";
import DisplayItem from "./DisplayItem";

const Home = () => {
  return (
    <>
      <div className="container my-3 ">
        <NavLink to="/detail-form">
          <button type="button" className="btn btn-primary">
            Add item
          </button>
        </NavLink>
        <DisplayItem />
      </div>
    </>
  );
};

export default Home;
