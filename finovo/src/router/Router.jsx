import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main2'
import BudgetPlanner from '../Pages/BudgetPlanner'
import ExpenseForm from '../Pages/Expense Form'
import ExpenseItems from '../Pages/ExpenseItems'
import ExpenseList from '../Pages/ExpenseList'
import SavingsGoalTracker from '../Pages/SavingsGoalTracker'
import FinancialEducation from '../Pages/FinancialEducation'
import Main2 from '../components/Main2'
import ForgotPassword from '../Pages/ForgotPassword'
import Register from '../Pages/Register'
import SignIn from '../Pages/SignIn'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Main />}/>
            <Route path="/budget-planner" element={<BudgetPlanner />} />
            <Route path="/expense-form" element={<ExpenseForm />} />
            <Route path="/expense-items" element={<ExpenseItems />} />
            <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/savings-goal-tracker" element={<SavingsGoalTracker />} />
            <Route path="/financial-education" element={<FinancialEducation />} />
            <Route path="/main-2" element={<Main2 />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router