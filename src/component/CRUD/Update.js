import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    id: "",
    name: "",
    phone: "",
  });

  const { name, phone } = task;
  const loadTask = async () => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log("update", data.data);
    setTask(data.data);
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, task);
    navigate("/");
  };
  return (
    <div className="container my-5">
     
        <div class="mb-3">
          <label htmlFor="name" class="form-label">
            Name
          </label>
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Enter Title of the Task"
            value={name}
            onChange={onInputChange}
            required
          />
        </div>
        <div class="mb-3">
          <label htmlFor="phone" class="form-label">
          Phone Number
          </label>
          <input
            class="form-control"
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={onInputChange}
            required
          />
        </div>
        <button
          onClick={onSubmit}
          type="button"
          class="btn btn-outline-primary mx-2"
        >
          Submit
        </button>
        <button type="button" class="btn btn-outline-danger" onClick={() => navigate('/')}>
          Cancel
        </button>
    </div>
  );
};

export default Update;
