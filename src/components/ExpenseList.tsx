import { useMemo } from "react"
import { useBudget } from "../Hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"

export const ExpenseList = () => {
    const {state}=useBudget()

    const isEmpty=useMemo(()=>state.expense.length===0,[state.expense])

  return (
   <div className="mt-10 ">
    {isEmpty ? 
        <p className="text-gray-600 text-2xl font-bold"> No hay gastos</p>: (
        <>
            <p className="text-gray-600 text-2xl font-bold my-5"> Listados de Gastos. </p>
            {state.expense.map(expense=>(
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
