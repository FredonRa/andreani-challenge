import React from 'react';
import Card from '../Card';
import "./style.css"

const List = ({
    title = "",
    step = 0,
    tasks = [],
    dispatch
}) => {
    const ACTIONS = [
        {
            left: false,
            right: true
        },
        {
            left: true,
            right: true
        },
        {
            left: true,
            right: false
        }
    ]

    const cardActions = ACTIONS[step]

    const _renderCards = tasks?.map(task => (
        <Card key={Math.random()} task={task} actions={cardActions} dispatch={dispatch} />
    ))

    return (
        <section className='list'>
            <div className='list_title'>
                <h2>{title}</h2>
            </div>
            <div className='list_cards'>
                {_renderCards}
            </div>
        </section>
    );
}

export default List;