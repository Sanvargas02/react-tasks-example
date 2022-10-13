import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // Cancela el comportamiento por defecto del formulario el cual es reiniciar la página

    //se ejecuta la función pasandole los valores que recibimos por el usuario
    createTask({
      title,
      description,
    });

    //Limpiar Valores luego de crear el la nueva tarea(nuevo elemento, dato), limpiamos primero los estados(state) luego el input con la etiqueta value
    setTitle('')
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        {/* Añadiendo título por input */}
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //valor es igual al state
          className='bg-slate-300 p-3 w-full mb-2'
          autoFocus //Para que el cursor lo seleccione por defecto
        />
        {/* Añadiendo una descripción */}
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description} //valor es igual al state
          className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button 
          className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
