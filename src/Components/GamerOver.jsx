import React, { useState } from 'react'
import './GameOver.css'

const GamerOver = ({won,setplayagain}) => {
  return (
    
    <div className='cont-gameover'>
        GameOver Player {won} has won the Game.
        <button onClick={()=>setplayagain()}>PlayAgain</button>
    </div>
  )
}

export default GamerOver