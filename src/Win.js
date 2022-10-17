import React from 'react'

function Win({stateMutate}) {
  return (
    <div>
        <h1>Win</h1>
        <button onClick={()=>{
            stateMutate("LeaderBoard")}}> LeaderBoard</button>
        </div>
  )
}

export default Win