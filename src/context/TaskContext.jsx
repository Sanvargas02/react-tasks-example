import { createContext, useState, useEffect } from "react";
//as es un alias para evitar conflictos de variables
import { tasks as data } from "../data/task"; // task.js hace las veces de API consumida

//TaskContex es el nombre y almacena datos
//Es el que se importa para ser usado en el useContext
export const TaskContext = createContext(); //Me retorna un object

//El TaskContextProvider engloba a los demás componentes
//Es el que se coloca en el main.jsx
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //Cuando carga el componente se establece(asigna) tareas(data)
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// export default TaskContext
