import React, { useContext, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { TaskContext } from '../tasks/contexts/TaskContext';
import { Action } from '../tasks/reducers/TaskReducer';
import { v4 as uuid } from 'uuid';

const AddTaskComponent = () => {

    const { dispatch } = useContext(TaskContext);
    const [description, setDescription] = useState('');

    const onAddTask = (e) => {

        e.preventDefault();

        dispatch({
            type: Action.ADD_TASK,
            task: {
                id:uuid(),
                isChecked:false,
                created:new Date(),
                description:description
            }
        });
        setDescription('')
    }
    return (
        <form onSubmit={onAddTask}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">

                <TextField
                    label="Todo List"
                    // variant="light"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />

            </Grid>
        </form>
    );
}

export default AddTaskComponent;