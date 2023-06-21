import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayItem = () => {
  const [task, setTask] = useState([]);

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
                  <div
                    class=" my-2 mx-2"
                    
                  >
                    <Link to={`/update/${task.id}`}>
                      <button type="button" className="btn btn-outline-primary">
                        Update
                      </button>
                    </Link>
                    <button
                      type="button"
                      class="btn btn-outline-danger mx-2"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayItem;
