import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


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

const Update = () => {
  return (
    <div>Update</div>
  )
}

export default Update