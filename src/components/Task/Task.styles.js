import styled from 'styled-components';

export const TaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 20px;
    background-color: whitesmoke;
    border: 1px solid gray;
`

export const TaskText = styled.div`
    padding: 5px;
    text-align: start;
`
export const DellButton = styled.button`
    padding: 5px;
    border: none;
    background: whitesmoke;
    transition: 0.7s;

    &:hover {
        background: red;
        color: white;
        padding: 10px;
        transition: 0.7s;
        cursor: pointer;
    }
`