import React from "react";
import Task from "./Task"

function TaskList(props) {


  return (
    <div className="tasks">
      {props.tasks.map((task, index) => {
        return (
          <Task handleDeleteTask={props.handleDeleteTask}
                key={index}
                index={index}
                category={task.category}
                text={task.text}/>
        )
      } )}
    </div>
  );
}

export default TaskList;
