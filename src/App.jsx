import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

import { useTaskContext } from "./Context/TaskContext";

function App() {
  const { searchValue } = useTaskContext();

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {searchValue === "" ? (
        <h1>No hay nada</h1>
      ) : (
        <TodoList>
            <TodoItem/>
        </TodoList>
      )}
      <CreateTodoButton />
    </>
  );
}

export default App;
