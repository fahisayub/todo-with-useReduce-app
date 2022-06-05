import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
const TaskList = () => {
   const {tasks}=useContext(TaskContext);
  
   
    
    return (
        <div>{tasks.map((task)=>{ return <TaskItem key={task.id} {...task}/>})}
            
        </div>
    );
};

export default TaskList;