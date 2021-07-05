import React, { useState } from 'react';
import TaskTodoList from './components/TaskTodo/TaskTodoList/TaskTodoList';
import TaskInput from './components/TaskTodo/TaskInput/TaskInput'
import './App.css'
const App = () => {
  const [taskLists, setTaskList] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
    { text: 'Graduate!', id: 'g3' },
    { text: 'Find a good job!', id: 'g4' }

  ]);
  const addTaskHandler = enteredText => {
    setTaskList(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };
  const deleteItemHandler = taskId => {
    setTaskList(prevTasks => {
      const updatedTask = prevTasks.filter(task => task.id !== taskId);
      return updatedTask;
    });
  };
  let content = (
    <p style={{ textAlign: 'center' }}>No Tasks found in your Todo List. Maybe add one?</p>
  );
  if (taskLists.length > 0) {
    content = (
      <TaskTodoList items={taskLists} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {content}
  
      </section>
    </div>
  );
}

export default App;
