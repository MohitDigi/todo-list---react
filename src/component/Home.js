import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Link to="/detail-form">
          <button type="button" class="btn btn-primary">
            Add item
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
