import { PASS_TASK, RETURN_TASK, DELETE_TASK } from "../../constants/actions";
import { Icons } from "../../constants/icons";
import "./style.css"

const Card = ({ task, actions, dispatch }) => {
    return (  
        <div className='card' key={Math.random()}>
            <div className="card_header">
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: DELETE_TASK,
                        payload: task
                    })
                }>
                    <img src={Icons.delete} alt="delete icon" />
                </button>
            </div>
            <div className="card_description">
                <span className="description_label">Task Description</span>
                <span className='description_text'>{task?.description}</span>
            </div>
            <div className="actions">
                {actions.left && (
                    <button 
                        type="button"
                        onClick={() => dispatch({
                            type: RETURN_TASK,
                            payload: task
                        })
                    }>
                        <img src={Icons.left} alt="left arrow icon" />
                    </button>
                )}
                {actions.right && (
                    <button
                        type="button"
                        onClick={() => dispatch({
                            type: PASS_TASK,
                            payload: task
                        })
                    }>
                        <img src={Icons.right} alt="right arrow icon" />
                    </button>
                )}
            </div>
        </div>
    );
}
 
export default Card;