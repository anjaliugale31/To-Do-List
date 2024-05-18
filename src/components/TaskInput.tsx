import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';

interface TaskInputProps {
    addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [toDoText, setToDoText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (toDoText.trim() === '') {
            return;
        }
        addTask(toDoText.trim());
        setToDoText('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <TextField
                    id="outlined-basic"
                    label="What is the task Today?"
                    variant="outlined"
                    style={{ marginRight: '10px', width: '300px' }}
                    multiline={true}
                    size='small'
                    value={toDoText}
                    onChange={(e) => {
                        setToDoText(e.target.value)
                    }}
                />

                <Button
                    variant="contained"
                    type='submit'
                    disabled={toDoText.trim() === ''}
                >Add Task
                </Button>
            </form>
        </>
    )
}

export default TaskInput