import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const { title, description, status } = task;
  const loadTask = async () => {
    const data = await axios.get(`http://localhost:3003/tasks/${id}`);
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
    await axios.put(`http://localhost:3003/tasks/${id}`, task);
    navigate("/");
  };
  return (
    <div className="container my-5">
     
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            class="form-control"
            type="text"
            name="title"
            placeholder="Enter Title of the Task"
            value={title}
            onChange={onInputChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="description" class="form-label">
          Description
          </label>
          <input
            class="form-control"
            type="text"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={onInputChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="description" class="form-label">
          Status
          </label>
          <input
            class="form-control"
            type="text"
            name="status"
            placeholder="Status: "
            value={status}
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
        <button type="button" class="btn btn-outline-danger" href="/">
          Cancel
        </button>
    </div>
  );
};

export default Update;
