import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial State
const initalState = {
    transactions : []
}

// Create Context
export const GlobalContext = createContext(initalState);

// Provider Component 
export  const  GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initalState);
    
  // Actions 
  function deleteTransactions(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload:id
    })
  }
  function addTransactions(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload:transaction
    })
  }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransactions,
        addTransactions
         
    }}>
        {children}
    </GlobalContext.Provider>)
}
