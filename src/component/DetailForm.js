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
    <div>
      <COL offset={10}>
        <P>Id</P>
        <INPUT
          type="text"
          name="id"
          placeholder="Enter your id"
          value={id}
          onChange={onInputChange}
        />
        <P>Title</P>
        <INPUT
          type="text"
          name="title"
          placeholder="Enter Title of the Task"
          value={title}
          onChange={onInputChange}
          pattern='[abc]'
        />
        <P>Description</P>
        <TEXTAREA
          type="text"
          name="description"
          placeholder="Enter Description"
          value={description}
          onChange={onInputChange}
        />
        <P>Status</P>
        <INPUT
          type="text"
          name="status"
          placeholder="Status: "
          value={status}
          onChange={onInputChange}
        />
      </COL>
      <Col style={{ marginTop: "10px" }} offset={11}>
        <Button onClick={onSubmit} type="primary">
          <FaCheck />
        </Button>
        <B href="/">
          <GiCancel />
        </B>
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
  border: 1px solid;
  border-radius: 4px;
`;

const TEXTAREA = styled.textarea`
  width: 30%;
  height: 10em;
  border: 1px solid;
  border-radius: 4px;
`;

const B = styled(Button)`
  left: 10px;
`;

export default DetailForm;
