import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailForm = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
   const result = await axios
    .get("http://localhost:3003/tasks")
    .then((res) => {
        setUser(res.data);
      })
    .catch((err) => {
        console.log(err);
      });
    console.log(result);
  };

  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Pending
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                In Process
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Complete
              </a>
            </li>
          </ul>
        </div>
        <div className="my-3">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailForm;
