import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

import styled from 'styled-components'

const FormControl = styled.div`
  margin: 0.5rem 0;
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? "red" : 'black'};
}
& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}
& input:focus {
  outline: none;
  background: #f7f3f5;
  border-color: #8b005d;
}
`;
const TaskInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const taskInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddTask(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>Todo list</label>
                <input type="text" onChange={taskInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Task</Button>
        </form>
    );
}

export default TaskInput
