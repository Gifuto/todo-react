import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Input } from '../Input/Input'
import { ListWrapper, TasksList } from './List.styles'
import { Task } from '../Task/Task'

export const List = () => {
    const [tasks, setTasks] = useState([])
    const id = nanoid()

    const addTodo = (text) => {
        const newTask = { id, text }
        setTasks((prev) => [...prev, newTask])
        console.log(id)
    }

    const handleRemoveItem = id => {
        // assigning the list to temp variable
        const temp = [...tasks];
    
        // removing the element using splice
        temp.splice(id, 1);
    
        // updating the list
        setTasks(temp);
    }
    

    return (
        <ListWrapper>
            <Input addTodo = { addTodo }/>

            <TasksList>
                { tasks.map((item, id) => (
                    <Task 
                        task = { item } 
                        key = { id } 
                        handleRemoveItem = { handleRemoveItem }
                    />
                )) }
            </TasksList>
        </ListWrapper>        
    )
}