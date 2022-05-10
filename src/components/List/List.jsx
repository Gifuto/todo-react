import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Input } from '../Input/Input'
import { ListWrapper, TasksList } from './List.styles'
import { Task } from '../Task/Task'

export const List = () => {
    const [tasks, setTasks] = useState([])

    const addTodo = (text) => {
        const id = nanoid()
        const newTask = { id, text }
        setTasks((prev) => [...prev, newTask])
    }

    const handleRemoveItem = (id) => {
        const taskId = id
        setTasks(tasks.filter(item => item.id !== taskId));
       };

    return (
        <ListWrapper>
            <Input addTodo = { addTodo }/>

            <TasksList>
                { tasks.map((item) => (
                    <Task 
                        task = { item } 
                        key = { item.id } 
                        handleRemoveItem = { handleRemoveItem }
                        id = { item.id }
                    />
                )) }
            </TasksList>
        </ListWrapper>        
    )
}