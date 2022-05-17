import { TaskWrapper, TaskText, DelButton } from './Task.styles'

export const Task = ({ task, handleRemoveItem, id }) => {
    return (
        <TaskWrapper>
            <TaskText>
                { task.text }
            </TaskText>

            <DelButton onClick = { () => handleRemoveItem(id) }>
                X
            </DelButton>
        </TaskWrapper>        
    )
}