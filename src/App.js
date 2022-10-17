import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { useReducer } from 'react';
import Win from './Win';
import Game from './Game';
import Lose from './Lose';
import LeaderBoard from './LeaderBoard';


function reducer(state,action){ // value in statemutate will be placed in action 
 switch (action) {
  case "Welcome":
    return{
   ui : "Welcome"    
  }
  case "Game":
    return{
      ui : "Game"
    }
    case "Win":
    return{
      ui : "Win"
    }
    case "Lose":
    return{
      ui : "Lose"
    }
    case "LeaderBoard":
    return{
      ui : "LeaderBoard"
    }
    
 
  default:
    return state
 }
}

function App() {
  const[state,dispatch]=useReducer(reducer,{ui : "Welcome"})
 let statemutate = (value) =>{
  dispatch(value)
 }
  return (
    <div className="App">
      {state.ui==="Welcome" ? <Welcome stateMutate={statemutate}/> : null}
      {state.ui==="Game" ? <Game stateMutate={statemutate}/> : null}
      {state.ui==="Win" ? <Win stateMutate={statemutate}/> : null}
      {state.ui==="Lose" ? <Lose stateMutate={statemutate}/> : null}
      {state.ui==="LeaderBoard" ? <LeaderBoard stateMutate={statemutate}/> : null}
      
      
    </div>
  );
}

export default App;
