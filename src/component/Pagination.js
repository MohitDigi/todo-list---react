import React, {useState} from "react";

const Pagination = ({showPerPage}) => {
    const [count, setCount] = useState(1);
       
  return (
    <>
      <nav aria-label="Page navigation example">
        <button className="btn btn-primary">Page</button>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#"  onClick={()=>{setCount(count+1)}}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
