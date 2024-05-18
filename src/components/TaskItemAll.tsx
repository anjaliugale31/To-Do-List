import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import styled from 'styled-components'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface Task {
    id: number;
    text: string;
    completed: boolean;
}
interface TaskItemAllProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
}
const TaskItemAll: React.FC<TaskItemAllProps> = ({ tasks, toggleTask }) => {
    return (
        <TaskItemStyling>
            <div className='list-syling' id="scrollableDiv" style={{ padding: '10px 0px ' }}>
                <ul>
                    {tasks.map(task => (
                        <li key={task?.id}>
                            <Checkbox
                                {...label}
                                defaultChecked color="success"
                                checked={task?.completed}
                                style={{}}
                                onChange={() => toggleTask(task?.id)}
                            />
                            <span>{task?.text}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </TaskItemStyling >
    )
}
const TaskItemStyling = styled.div`

.list-syling{
    ul
    {
        text-align: justify;
    li{
        list-style: none;
        display: flex;
        align-items: center;
    }
}
}
`
export default React.memo(TaskItemAll);