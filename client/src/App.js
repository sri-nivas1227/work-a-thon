
import { BrowserRouter,Route,Routes,useParams } from 'react-router-dom';
import './App.css';
import Task from './components/task/Task';
import TaskItem from './components/task/TaskItem';

function App() {
  
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
          <Task/>
          }/>
           
        <Route path=":id" element={<TaskItem/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
