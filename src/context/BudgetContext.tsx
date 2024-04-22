import { useReducer,createContext,Dispatch, ReactNode,useMemo } from "react"
import { budgetReducer,initialState,BudgetState,BudgetActions } from "../reducers/budget-reducer"


type BudgetContextProps={
    state: BudgetState
    dispatch:Dispatch<BudgetActions>
    totalExpense:number
    remainingBudget: number

}

type BudgetProviderProps={
    children:ReactNode
}

export const BudgetContext= createContext<BudgetContextProps>({}as BudgetContextProps)

export const BudgetProvider=({children}:BudgetProviderProps)=>{

    const [state,dispatch]=useReducer(budgetReducer,initialState)

    const totalExpense=useMemo(()=> state.expense.reduce((total,expense)=>expense.amount +total,0),[state.expense])

    const remainingBudget=state.budget-totalExpense


    return(
        <BudgetContext.Provider
        value={{
            state,
            dispatch,
            totalExpense,
            remainingBudget
        }}
        >
            {children}
        </BudgetContext.Provider>  
    )
}