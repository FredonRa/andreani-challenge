import { DELETE_TASK, NEW_TASK, PASS_TASK, RETURN_TASK } from "../constants/actions"

export const taskActions = (state, action) => {
    const taskStepId = action.payload.step
    const taskStepName = taskStepId === 0 ? "todo" : taskStepId === 1 ? "doing" : "done"
    const taskId = action.payload.id

    switch (action.type) {
        case NEW_TASK: {
            const lastestTodo = state.todo
            return state = {
                ...state,
                todo: [...lastestTodo, action.payload]
            }
        }
        case PASS_TASK: {
            const removeTaskFromArray = state[taskStepName].filter(task => task.id !== taskId)
            const nextStepName = taskStepId === 0 ? "doing" : "done"
            const nextStepData = state[nextStepName]
            return {
                ...state,
                [taskStepName]: [...removeTaskFromArray],
                [nextStepName]: [
                    ...nextStepData, 
                    {
                        ...action.payload,
                        step: taskStepId + 1
                    }
                ]
            }
        }
        case RETURN_TASK: {
            const removeTaskFromArray = state[taskStepName].filter(task => task.id !== taskId)
            const previousStepName = taskStepId === 1 ? "todo" : "doing"
            const previousStepData = state[previousStepName]
            return {
                ...state,
                [taskStepName]: [...removeTaskFromArray],
                [previousStepName]: [
                    ...previousStepData, 
                    {
                        ...action.payload,
                        step: taskStepId - 1
                    }
                ]
            }
        }
        case DELETE_TASK: {
            const removeTaskFromArray = state[taskStepName].filter(task => task.id !== taskId)
            return {
                ...state,
                [taskStepName]: [...removeTaskFromArray],
            }
        }
    }
}