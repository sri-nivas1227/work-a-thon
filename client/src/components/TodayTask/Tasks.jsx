import React from "react";
import "./Task.css";
const Tasks = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.map((item) => (
          <>
              <div class="task">
                <input type="checkbox" id={item.id} />
                <label  >{item.task}</label>
              </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
