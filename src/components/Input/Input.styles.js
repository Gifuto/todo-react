import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: inline-block;
    padding: 0;
    border: 1px solid red;
`

export const StyledInput = styled.input`
    padding: 10px;
    border: none;
    text-align: start;
    outline: none;
    transition: 0.7s;

    &:hover {
        padding: 15px;
        transition: 0.7s;
    }
`

export const AddButton = styled.button`
    border: none;
    background-color: white;
    padding: 10px;
    cursor: pointer;
`