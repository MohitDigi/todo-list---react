import styled from "styled-components";
import { Button, Col } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

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
      <COL>
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
        
        
        
      </COL>
      <Col style={{ marginTop: "10px" }} offset={11}>
        <Button onClick={onSubmit} type="primary">
         Submit
        </Button>
        <B href="/">Back</B>
      </Col>
    </div>
  );
};

const COL = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const P = styled.p``;

const INPUT = styled.input`
  width: 30%;
  height: 2em;
  ${"" /* margin-bottom:2px; */}
  border: 1px solid;
  border-radius: 4px;
`;
const B = styled(Button)`
  left: 10px;
`;

export default Update;
