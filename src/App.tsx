import './App.css';
import {TaskType, Todolist} from "./Todolist";


function App() {

    let tasks: Array<TaskType> =[
        {id:1,title:"CSS", isDone:true},
        {id:2,title:"JS", isDone:true},
        {id:3,title:"React", isDone:false},
    ]

    function removeTask(id: number) {
       let resultTasks= tasks.filter(task => task.id !== id)
    }

  return (
      <div className="App">
          <Todolist
              title="What to learn"
              tasks={tasks}
              removeTask={removeTask}
          />
      </div>
  );
}

export default App;

