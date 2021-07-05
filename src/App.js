import React, { useState } from 'react';
import TaskTodoList from './components/TaskTodo/TaskTodoList/TaskTodoList';
import TaskInput from './components/TaskTodo/TaskInput/TaskInput'
import styled from 'styled-components'
const TasksSection = styled.section`
  width: 35rem;
    max-width: 90%;
    margin: 3rem auto;
`;
const TasksFormSection = styled.section`
  width: 30rem;
    max-width: 90%;
    margin: 3rem auto;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(80, 79, 79, 0.2);
    border-radius: 10px;
`;

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
      <TasksFormSection>
        <TaskInput onAddTask={addTaskHandler} />
      </TasksFormSection>
      <TasksSection>
        {content}
  
      </TasksSection>
    </div>
  );
}

export default App;
