import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";

const DisplayItem = () => {
  const [task, setTask] = useState([]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start:0,
    end:showPerPage,
  });

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios
      .get("http://localhost:3003/tasks")
      .then((res) => {
        setTask(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
  };

  return (
    <>
      {task.slice(pagination.start,pagination.end).map((task) => {
        return (
          <>
          <div key={task.id} className="container my-3">
            <div className="accordion " id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    
                    {task.title}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{task.description}</div>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      })}
      <Pagination showPerPage={showPerPage}/>
    </>
  );
};

export default DisplayItem;
