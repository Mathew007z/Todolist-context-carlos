import React from "react";
import "./TodoSearch.css";
import { useTaskContext } from "../../Context/TaskContext";




function TodoSearch() {


  const {setSearchValue, searchValue} = useTaskContext()
  return (
    <input
      value={searchValue}
      placeholder="Escribe una tarea"
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribiste en el TodoSearch");
        console.log(event);
        console.log(event.target);
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };
