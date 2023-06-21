import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "antd";
import {Link } from "react-router-dom";

const DisplayItem = () => {
  const [task, setTask] = useState([]);
  // const [showPerPage, setShowPerPage] = useState(4);
  // const [pagination, setPagination] = useState({
  //   start:0,
  //   end:showPerPage,
  // });

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios
      .get("http://localhost:3003/tasks")
      .then((res) => {
        setTask(res.data.reverse());
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3003/tasks/${id}`);
    loadTask();
  };
  return (
    <>
      {task.map((task, index) => {
        return (
          <div key={task.id} className="container my-3">
            <div className="accordion" id={`accordionExample-${index}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseOne-${index}`}
                    aria-expanded="false" 
                    aria-controls={`collapseOne-${index}`}
                  >
                    {task.title}
                  </button>
                </h2>
                <div
                  id={`collapseOne-${index}`}
                  className="accordion-collapse collapse "
                  data-bs-parent={`#accordionExample-${index}`}
                >
                  <div className="accordion-body">{task.description}</div>
                  <Link to={`/update/${task.id}`}>
                    <button type="button" className="btn">
                      Update
                    </button>
                  </Link>
                  <Button onClick={() => deleteTask(task.id)}>Delete</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
    }  

export default DisplayItem;
