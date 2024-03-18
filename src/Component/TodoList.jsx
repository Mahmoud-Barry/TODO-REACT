import TodoItem from "./TodoItems";
import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Manger',
    completed: true
    },
    {
    id: 2,
    text: 'Dormir',
    completed: false
    }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
    const newTask = {id: Date.now(),text,completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }

   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }

   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }

   return (
    <div className="todo-list">
     <h1 >Todo-List</h1>
   <input className="input" value={text} onChange={e => setText(e.target.value)} />
       <button className="input"onClick={() => addTask(text)}>AJoutez</button>
      {tasks.map(task => (
    <TodoItem key={task.id} task={task}deleteTask={deleteTask}toggleCompleted={toggleCompleted}/>
    ))}
    </div>
    );
   }
   export default TodoList;