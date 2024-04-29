import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

    const { state } = useBudget()

    const filteredExpenses = state.currentCategory ? state.expenses.filter( expense => expense.category === state.currentCategory ) : state.expenses

    const isEmpty = useMemo( () =>  filteredExpenses.length === 0, [state.expenses, state.currentCategory] )

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
            { isEmpty ? 
                <p className="text-gray-600  text-2xl font-bold text-center">No hay Gastos</p> : 
            (
                <>
                    <p 
                    className="text-gray-600 text-2xl font-bold my-5 text-center"
                    >
                        Listado de Gastos
                    </p>
                    <div className="flex flex-col text-center">
                        <small>Nota:</small> 
                        <small>Para eliminar desliza hacia la izquierda</small>
                        <small>Para actualizar desliza a la derecha</small>
                    </div>

                    { filteredExpenses.map( expense => (
                        <ExpenseDetails
                            key={expense.id}
                            expense={expense}
                        />
                    ) ) }
                </>        
            )}
        </div>
    )
}
