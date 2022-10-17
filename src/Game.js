import React from 'react'

function Game({stateMutate}) {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={()=>{
            stateMutate("Win")}}> Win</button>
              <button onClick={()=>{
            stateMutate("Lose")}}> Lose</button>
        </div>

  )
}

export default Game