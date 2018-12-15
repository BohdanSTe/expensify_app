import uuid from 'uuid';

export const addTask = ({
    task = '',
    done = false,
}) => ({
    type: 'ADD_TASK',
    task: {
        id: uuid(),
        task,
        done
    }
});

export const removeTask = ({id}) => ({
    type: 'REMOVE_TASK'
});

export const editTask = ({id, updates}) => ({
    type: 'EDIT_TASK',
    id,
    updates
});