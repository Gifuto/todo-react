import { TaskWrapper, TaskText, DelButton } from './Task.styles'

export const Task = ({ task, handleRemoveItem }) => {
    return (
        <TaskWrapper>
            <TaskText>
                {task.text}
            </TaskText>

            <DelButton onClick={ handleRemoveItem }>
                X
            </DelButton>
        </TaskWrapper>        
    )
}