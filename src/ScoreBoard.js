import React from 'react'
import './Assets/Board.css'

const ScoreBoard = (props) => { 
    return (
        <div className='contain'>
            <div className='boards'>
                <p>Current score: {props.score.length}</p>                
            </div>
            <div className='boards'>
                <p>Best score: {props.bestScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard