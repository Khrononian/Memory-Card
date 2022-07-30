import React from 'react'
import './Assets/App.css';
import Card from './Card';

const App = () => {
  return (
    <div>
      <header>
        <h1>Fallout Memory Card</h1>
        
      </header>

      <div className='card-grid'>
        <Card />
      </div>
    </div>
  )
}

export default App