import React from 'react'

function Lose({stateMutate}) {
  return (
    <div><h1>Lose</h1>
         <button onClick={()=>{
            stateMutate("LeaderBoard")}}> LeaderBoard</button>
             <button onClick={()=>{
            stateMutate("Welcome")}}> Play Again</button>

    </div>
  )
}

export default Lose