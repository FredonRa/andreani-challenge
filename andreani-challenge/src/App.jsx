import { useState, useReducer } from 'react'
import { taskActions } from './actions/task.actions'
import { List, Modal } from './components'
import './App.css'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [state, dispatch] = useReducer(
    taskActions, 
    {
      todo: [],
      doing: [],
      done: [] 
    }
  )  

  const onCreateTask = (description) => {
    const newTask = {
      id: Math.random(),
      description: description,
      step: 0
    }

    dispatch({
      type: "NEW_TASK",
      payload: newTask
    })
    setOpenModal
    setOpenModal(false)
  }

  return (
    <main>
      <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)} 
        onSubmit={(description) => onCreateTask(description)}
      />
      <div className='create'>
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      <div className='kanban'>
        <List title='To Do' tasks={state.todo} step={0} dispatch={dispatch} />
        <List title='Doing' tasks={state.doing} step={1} dispatch={dispatch} />
        <List title='Done' tasks={state.done} step={2} dispatch={dispatch} />
      </div>
    </main>
  )
}

export default App