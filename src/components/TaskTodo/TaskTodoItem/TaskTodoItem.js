import React from 'react'
import styled from 'styled-components'

const TaskItem = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`

const TaskTodoItem = props => {
    const deleteHandler =()=>{
        props.onDelete(props.id);
    }
    return (
        <TaskItem onClick={deleteHandler}>
            {props.children}
        </TaskItem>
    )
}

export default TaskTodoItem
