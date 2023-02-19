import React, { useState } from "react";
import "./Task.css";
import { Link } from "react-router-dom"
const Tasks = ({ tasks }) => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <ul>
        {tasks.map((item) => (
          <>
            <div className="task">
              <input type="checkbox" id={item.id} />
              <Link to={`/${item.id}`} className="text-decoration-none">

                <div className="task-div">

                  <label
                    onMouseEnter={() => setSelectedItem(item.id)}
                    onMouseLeave={() => setSelectedItem(null)}
                  >
                    {item.task}
                  </label>
                  {selectedItem === item.id && (
                    <div className="description">{item.description}</div>
                  )}
                </div>


              </Link>
              {/* <input type="checkbox" id={item.id} />
                <label  >{item.task}</label> */}
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
