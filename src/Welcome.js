import React from 'react'

function Welcome({stateMutate}) {
  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={()=>{
            stateMutate("Game")}}> start game</button>
    </div>
    
  )
}

export default Welcome