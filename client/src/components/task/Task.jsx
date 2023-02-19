import React, { useState } from 'react'
//import TaskItem from './TaskItem'
import "./Task.css"
import { Link } from "react-router-dom";
const Tasks = [
  { userTaskTitle: "Task Intiated Desgin file ready",
  description:"Description 1",
  isCompleted: false, id: 0 },
  { userTaskTitle: "Developement code ready",
  description:"Description 2",
  isCompleted: false, id: 1 },
  { userTaskTitle: "Code deployed", 
  description:"Description 3",
  isCompleted: false, id: 2 },
  { userTaskTitle: "Client required modification done",
  description:"Description 4",
  isCompleted: false, id: 3 },
]

const Task = ({ projectTitle }) => {

  const [taskArray, setTasksArray] = useState([...Tasks]);
  // function toggleTask(index) {
  //   taskArray[index].isCompleted = !taskArray[index].isCompleted
  //   setTasksArray([...taskArray])
  // }
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
      <div>
        <div className="title">
          Title Of Task
        </div>
        <div>

        </div>
      </div>

      <div>
        <div>
          Task Description
        </div>
        <div>
           
          {
            taskArray.map((item, index) => {
              return <li key={item.id}
              className="list-style"
              >
                <Link to={`/${item.id}`} className="text-decoration-none">
                  <div className='text-black container'
                  
                   onMouseEnter={() => setSelectedItem(index)}
                   onMouseLeave={() => setSelectedItem(null)}
                   >

                    <h3 className='text-2xl'>{item.userTaskTitle}</h3>
                      {selectedItem === index && (
            <div className="details">{item.description}</div>
          )}

                  </div>
                </Link>
              </li>
            })
          }
        
        </div>
      </div>
    </div>
  )
}

export default Task