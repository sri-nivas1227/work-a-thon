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
            <div className="task" >
              <input type="checkbox" id={item.id} />
              <Link to={`/${item.id}`} className="taskLink">

               

               <label>{item.task}</label> 

              </Link>
              {/* <input type="checkbox" id={item.id} />*/}
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
 {/* <div className="task-div">

                  <label
                    onMouseEnter={() => setSelectedItem(item.id)}
                    onMouseLeave={() => setSelectedItem(null)}
                  >
                    {item.task}
                  </label>
                  {selectedItem === item.id && (
                    <div className="description">{item.description}</div>
                  )}
                </div> */}