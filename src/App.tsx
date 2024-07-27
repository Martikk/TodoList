import './App.css';
import {Todolist} from "./Todolist";

function App() {
  return (
      <div className="App">
          <Todolist title="What to learn"/>
          <Todolist title="Movies"/>
        <input type="checkbox"/>
        <input type="date"/>
        <input placeholder="placeholder"/>
      </div>
  );
}

export default App;

