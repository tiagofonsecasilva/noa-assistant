import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import AddTaskComponent from '../AddTaskComponent';
import TaskListComponent from './TasksListComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: 'transparent'
    },
    
}));

const TodoListComponent = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AddTaskComponent></AddTaskComponent>
                </Grid>
                <Grid item xs={12}>
                    <TaskListComponent></TaskListComponent>
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoListComponent;