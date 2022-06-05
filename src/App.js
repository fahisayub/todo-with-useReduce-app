import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStatus from './components/TaskStatus';

function App() {
  return (
    <div className="App">
      <TaskStatus/>
     <TaskInput/>
     <TaskList/>
    </div>
  );
}

export default App;
