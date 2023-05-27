import React from 'react';
import { useContext, useState } from 'react'; 
const TaskContext = React.createContext([])
export const useTaskContext = () => useContext(TaskContext);

    //info inicial
    
const TaskProvider = ({children}) => {
    const defaultTodos = [
        { text: "Tarea 1", completed: true },
        { text: "Tarea 2", completed: false },
        { text: "Tarea 3", completed: false },
        { text: "Tarea 4", completed: true },
      ];
    const [todos, setTodos] = useState(defaultTodos);

        //Obtener el value del todoSearch
        const [searchValue, setSearchValue] = useState("");
        //Contar totales y completados del TodoCounter

        const completedTodos = todos.filter((todo) => !!todo.completed).length;
        const totalTodos = todos.length;
        //Buscar tarea en Todo Search
        const searchTodos = todos.filter((todo) => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        });

                    //Eliminar Tarea
            const deleteTodo = (text) => {
                const newTodos = [...todos];
                const todoIndex = newTodos.findIndex((todo) => todo.text === text);
                newTodos.splice(todoIndex, 1);
                setTodos(newTodos);
            };


        //Aplicar Check a tarea
        const checkTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex((todo) => todo.text === text);
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            setTodos(newTodos);
        };










    return(
    <TaskContext.Provider value={{
        checkTodo,
        deleteTodo,
        setTodos,
        searchTodos,
        totalTodos,
        completedTodos,
        searchValue,
        todos,
        setSearchValue,
        defaultTodos


    }}>
        {children}
    </TaskContext.Provider>
    )
}
export default TaskProvider;