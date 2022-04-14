import { TaskWrapper, TaskText, DellButton } from './Task.styles'

export const Task = ({task}) => {
    return (
        <TaskWrapper>
            <TaskText>
                {task.text}
            </TaskText>

            <DellButton>
                X
            </DellButton>
        </TaskWrapper>        
    )
}