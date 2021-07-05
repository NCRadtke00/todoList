import React from 'react'
import TaskTodoItem from '../TaskTodoItem/TaskTodoItem';
import styled from 'styled-components'

const TaskLists = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const TaskTodoList = props => {
    return (
        <TaskLists>
            {props.items.map(task => (
                <TaskTodoItem
                    key={task.id}
                    id={task.id}
                    onDelete={props.onDeleteItem}
                >
                    {task.text}
                </TaskTodoItem>
            ))}
        </TaskLists>
    )
}

export default TaskTodoList;
