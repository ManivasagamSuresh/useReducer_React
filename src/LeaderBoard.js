import React from 'react'

function LeaderBoard({stateMutate}) {
  return (
    <div><h1>LeaderBoard</h1>
         <button onClick={()=>{
            stateMutate("Welcome")}}> Play Again</button>
    </div>
  )
}

export default LeaderBoard