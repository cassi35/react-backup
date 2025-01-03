import React,{createContext,useReducer} from "react";
import appReducer from './appReducer'
//initial state
const initialState = {
 transactions:  [
     { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
     { id: 3, text: 'Book', amount: -10 },
     { id: 4, text: 'Camera', amount: 150 }
    ]
}
//criar um contexto
export const GlobalContext = createContext(initialState)

//provide cmponent
export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(appReducer,initialState)
//acoes
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}
function AddTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
}
return (
<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    AddTransaction
}}>
{children}
</GlobalContext.Provider>)
} 