import { useMemo,useEffect } from "react"
import { BudgetForm } from "./components/BudgetForm"
import { useBudget } from "./Hooks/useBudget"
import { BudgetTracker } from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import { ExpenseList } from "./components/ExpenseList"
import FilterByCategory from "./components/FilterBarCategory"


function App() {

  const {state }=useBudget()

  const isValidBudget= useMemo(()=>state.budget,[state.budget])

  useEffect(()=>{
    localStorage.setItem('budget',state.budget.toString())
    localStorage.setItem('expense',JSON.stringify(state.expense))

  },[state])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72 ">
        <h1 className="text-center uppercase font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker/> : <BudgetForm/>}
        
      </div>
      {isValidBudget ? (
        <main className=" max-w-3xl mx-auto py-10">
          <FilterByCategory/>
          <ExpenseList/>
          <ExpenseModal/>
        </main>

      ):null}
    </>
  )
}

export default App
