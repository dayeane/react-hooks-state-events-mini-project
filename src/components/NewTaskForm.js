import React, {useState}  from "react";

function NewTaskForm(props) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("Code")
  const options = props.categories.map((category, index) => {
    if (category !=="All") {
      return <option key={index}>{category}</option>
    }
  })

  function handleChangeDetails(e) {
   setDetails(e.currentTarget.value)
  }

  function handleChangeCategory(e) {
    setCategory(e.currentTarget.value)
   }

   function onTaskFormSubmit(e) {
    e.preventDefault() 
    const task = { 
      text: details, 
      category: category
    }
    props.setAllList([...props.allList, task])
    setDetails("")
    setCategory("Code")

    props.updateList([...props.allList, task])
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input onChange={handleChangeDetails} type="text" value={details} name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChangeCategory} name="category" value={category}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
