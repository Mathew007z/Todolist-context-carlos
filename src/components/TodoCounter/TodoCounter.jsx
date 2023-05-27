import "./TodoCounter.css";
import { useTaskContext } from "../../Context/TaskContext";



function TodoCounter() {

  const {totalTodos, completedTodos} = useTaskContext()


  return totalTodos === completedTodos ? (
    <h1 className="TodoCounter">Felicidades has terminado tus tareas</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
