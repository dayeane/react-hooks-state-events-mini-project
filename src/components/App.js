import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [allList, setAllList] = useState(TASKS)

  function handleDeleteTask(e) {
    const filtered = allList.filter(function(_task, index){ 
        return index !== parseInt(e.target.id);
    });
    console.log(filtered)
    setAllList(filtered)
    setTasks(filtered)
  }

  function filterCategories(categoryName) {
    if ("All" ===categoryName) {
      setTasks(allList)
    } else {  
      const filtered = allList.filter(function(task) {
        return categoryName === task.category
      });
      setTasks(filtered)
    }
  }

  function updateList(newList = allList) {
    console.log(newList)
    setTasks(newList)
  }

  console.log(allList)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCategories={filterCategories}/>
      <NewTaskForm categories={CATEGORIES} updateList={updateList} allList={allList} setAllList={setAllList} setTasks={setTasks}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
