import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailForm = () => {
  let navigate = useNavigate();
  const [task, setTask] = useState({
    id: "",
    name: "",
    phone: "",
  });

  const { id, title, description, status } = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/users", task);
    navigate("/");
  };
  return (
    <>
      <div className="container my-5">
        <div class="mb-3">
          <label htmlFor="id" class="form-label">
            ID
          </label>
          <input
            class="form-control"
            type="text"
            name="id"
            placeholder="Enter id"
            value={id}
            onChange={onInputChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Name
          </label>
          <input
            class="form-control"
            type="text"
            name="title"
            placeholder="Enter Name"
            value={title}
            onChange={onInputChange}
          />
        </div>

        <div class="mb-3">
          <label htmlFor="phone" class="form-label">
            phone
          </label>
          <input
            class="form-control"
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={description}
            onChange={onInputChange}
          />
        </div>
        <button
          onClick={onSubmit}
          type="button"
          class="btn btn-outline-primary mx-2"
        >
          Submit
        </button>
        <Link to='/'>
        <button type="button" class="btn btn-outline-danger">
          Cancel
        </button>
          </Link>
      </div>
    </>
  );
};

export default DetailForm;
