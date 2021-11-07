import React from "react";

function CategoryFilter(props) {
  const buttons = props.categories.map((categoryName, index) => {
    return <button onClick={addClassSelected} key={index}>{categoryName}</button>
  })

 function addClassSelected(e) {
   document.querySelectorAll(".categories button.selected").forEach((button)=>{
     button.classList.remove("selected")
   })

   e.currentTarget.classList.add("selected")
   props.filterCategories(e.currentTarget.innerText)
 } 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
