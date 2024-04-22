import { useMemo } from "react"
import { useBudget } from "../Hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"

export const ExpenseList = () => {
    const {state}=useBudget()

    
    const filterExpense=state.currentCategory ? state.expense.filter(expense=>expense.category===state.currentCategory): state.expense
    
    const isEmpty=useMemo(()=>filterExpense.length===0,[filterExpense])

  return (
   <div className="mt-10 bg-white shadow-lg rounded-lg">
    {isEmpty ? 
        <p className="text-gray-600 text-2xl font-bold"> No hay gastos</p>: (
        <>
            <p className="text-gray-600 text-2xl font-bold my-5"> Listados de Gastos. </p>
            {filterExpense.map(expense=>(
                <ExpenseDetail
                    key={expense.id}
                    expense={expense}
                />
                
            ))}
        </>
    )
    
    }

   </div>
  )
}
