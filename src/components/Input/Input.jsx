import React, { useState } from "react";
import { InputWrapper, StyledInput, AddButton } from './Input.styles'

export const Input = ( { addTodo } ) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        if (e.code === 'Enter' && value.trim()) {
            addTodo(value.trim())
            setValue('')
        }
    }

    const addButton = () => {
        if (value !== '' && value.trim()) {
            addTodo(value.trim())
            setValue('')
        }
    }

    return (
        <InputWrapper>
            <StyledInput 
                type = 'text'
                placeholder = 'Введи задачу'
                value = { value }
                onChange = { (e) => setValue(e.target.value) }
                onKeyDown = { handleSubmit }
            />

            <AddButton onClick = { addButton }> + </AddButton>
        </InputWrapper>        
    )
}