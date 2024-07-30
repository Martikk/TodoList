import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";


export type filterValueType ="all" | "completed" | "active";
function App() {

    let [filter, setFilter] = useState<filterValueType>('all');

    let [tasks,setTask] = useState<Array<TaskType>>([
        {id:1,title:"CSS", isDone:true},
        {id:2,title:"JS", isDone:true},
        {id:3,title:"React", isDone:false},
    ]);

    function removeTask(id: number) {
       let filteredTasks = tasks.filter(task => task.id !== id)
        setTask(filteredTasks);
    }

    function changeFilter (value: filterValueType) {
        setFilter(value);
    }
    let tasksForTodoList = tasks;
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(tasks=> tasks.isDone === true);
    }
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(tasks=> tasks.isDone === false);
    }
  return (
      <div className="App">
          <Todolist
              title="What to learn"
              tasks={tasksForTodoList}
              removeTask={removeTask}
              changeFilter={changeFilter}
          />
      </div>
  );
}

export default App;

