import { useState,ChangeEvent, useMemo } from "react"
import { useBudget } from "../Hooks/useBudget"

export const BudgetForm = () => {

    const [budget,setBudget]=useState(0)
    const {dispatch}= useBudget()

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setBudget(e.target.valueAsNumber)
      
    }

    const isValid=useMemo(()=>{
        return isNaN(budget)|| budget <= 0

    },[budget])

    const hadnleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch({
            type:'add-budget',
            payload:{budget}
        })

    }

  return (
    <form className="space-y-5" onSubmit={hadnleSubmit}>
        <div className="flex flex-col space-y-5">
            <label  htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                Definir Presupuesto 
            </label>

        </div>
        <input
            id="budget"
            type="number"
            className="w-full bg-white border border-gray-200 p-2"
            name="budget"
            value={budget}
            onChange={handleChange}
        />
        <input
            type="submit"
            value="Definir Presupuesto"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black  disabled:opacity-40"
            disabled={isValid}

        />
    </form>
  )
}
