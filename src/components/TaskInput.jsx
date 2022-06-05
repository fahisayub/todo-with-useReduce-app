import React, { useContext } from "react";
import { OperationContext } from "../context/OperationContext";
//import { useReducer } from "react";
const TaskInput = () => {
  const [query, setQuery] = React.useState("");
  const {dispatch}=useContext(OperationContext);
  // const [state,dispatch]=useReducer(reducerfn,[]);
  const onchangeHadler = (e) => {
    setQuery(e.target.value);
  };


  return (
    <div>
      <input type="text" value={query} onChange={onchangeHadler} />
      <button onClick={()=>(dispatch({type:'addtask',payload:query}),setQuery(''))}>+</button>
    </div>
  );
};

export default TaskInput;
