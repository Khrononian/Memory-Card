import React, { useState } from 'react'
import './Assets/App.css';
import Card from './Card';

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div>
      <header>
        <h1>Fallout Memory Card</h1>
        
      </header>

      <div className='card-grid'>
        <Card 
          score={score} 
          setScore={setScore} 
          bestScore={bestScore} 
          setBestScore={setBestScore}
        />
      </div>
    </div>
  )
}

export default App