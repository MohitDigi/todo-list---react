import styled from "styled-components";
import { Button, Col } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

const DetailForm = () => {
  let navigate = useNavigate();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const { id, title, description, status } = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/tasks", task);
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
            placeholder="Enter your id"
            value={id}
            onChange={onInputChange}
          />
        </div>
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
          <label htmlFor="status" class="form-label">
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
    </>
  );
};

export default DetailForm;
