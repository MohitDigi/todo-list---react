import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";

const DisplayItem = () => {
  const [task, setTask] = useState([]);
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      render: (_, record) => {
        return(
          <><Link to={`/update/${record.id}`}>
          <button
            type="button"
            className="btn btn-outline-primary"
          >
            Update
          </button>
        </Link>
        <button
          type="button"
          class="btn btn-outline-danger mx-2"
          onClick={() => deleteTask(record.id)}
        >
          Delete
        </button></>
        )
      }
    }
  ];

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setTask(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
  };
  const deleteTask = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    loadTask();
  };
  return (
    <>
      
        {task.length ? 
          <Table rowKey={task.id} dataSource={task} columns={columns} size="medium" />
        :
          <>Loading</>
        }
    
    </>
  );
};

export default DisplayItem;
