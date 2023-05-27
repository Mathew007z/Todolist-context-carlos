import "./TodoItem.css";
import { useTaskContext } from "../../Context/TaskContext";



function TodoItem() {

  const {onDelete, onCheck, searchTodos} = useTaskContext() 

  return (
    <>
      { searchTodos.map((item) => 
      <div key={item.text}>

      <li className="TodoItem">
      <span
        className={`Icon Icon-check ${item.completed && "Icon-check--active"}`}
        onClick={onCheck}
      >
        ✓
      </span>
      <p className={`TodoItem-p ${item.completed && "TodoItem-p--complete"}`}>
        {item.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        ✕
      </span>
    </li>
    </div>
)}
    </>
  
    
    
  );
}
export { TodoItem };
