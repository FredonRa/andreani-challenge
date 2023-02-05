import { useState } from 'react';
import './style.css'

const Modal = ({
    open = true,
    onClose,
    onSubmit
}) => {
    const [taskDescription, setTaskDescription] = useState("")
  
    const onSubmitTask = () => {
        if(taskDescription === "") return
        onSubmit(taskDescription)
        setTaskDescription("")
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') onSubmitTask()
    }

    return (
        <>  
            {open && (
                <>
                    <div className="modal_background" onClick={onClose} />
                    <div className="modal">
                        <div className="modal_header">
                            <h2>Create Task</h2>
                        </div>
                        <div className="modal_body">
                            <textarea onKeyDown={handleKeyDown} maxLength="120" type="text" placeholder="Task description..." onChange={e => setTaskDescription(e.target.value)} />
                        </div>
                        <div className="modal_footer">
                            <button type='button' className='modal_cancel' onClick={onClose}>Cancel</button>
                            <button type='button' className='modal_submit' onClick={onSubmitTask}>Create</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Modal;