import React, {useState,useReducer} from 'react';
import './App.css';


// Estado inicial 
const stateInitial = {
  items: [
    {
      id:1,
      name: "item-1",
      price: 250
    },
    {
      id:1,
      name: "item-2",
      price: 650
    },
    {
      id:1,
      name: "item-3",
      price: 150
    },

  ],
  cart: [],
  total: 0

}

// el estado de esta funcion hace referencia al estado anterior, para que pueda retonar el nuevo valor 
const reducer =(state, action) =>{
  switch (action.type){
    case "add":
      return{
        // este vendria siendo el nuevo estado a retornar 
        counter: state.counter +1
      };
    case "subs":
      return{
        counter: state.counter -1
      };
    default:
      break;
  }
}

function App() {

  //useReducer
  //Esta es una forma de poner un estado inicial 
  const [state,dispatch] = useReducer(reducer, {counter:20})
  // esta es la segunda forma de poner un estado incial 
  const [state,dispatch] = useReducer(reducer, stateInitial)

  const handleAddToCart =(item) =>{
    dispatch({type: "ADD_Cart", payload: item})
  }

  return (
    <div className="App">
    
      {
        state.item.map (item =>(
          <div>
            <h3>
              {item.name}
            </h3>
            <p>$ {item.price}</p>
            <button  onClick ={()=> handleAddToCart(item)}>Add To cart </button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
