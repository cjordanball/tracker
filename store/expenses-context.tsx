import { createContext, useState } from 'react';
import { Expense } from '../types';

export const ExpensesContext = createContext({
	expenses: [] as Array<Expense>,
	addExpense: (expense: Expense) => {},
	deleteExpense: (expense: Expense) => {},
	updateExpense: (expense: Expense) => {},
});

interface ExpensesContextProviderProps {
	children: React.ReactNode;
}

export const ExpensesContextProvider = ({
	children,
}: ExpensesContextProviderProps) => {
	const [expenses, setExpenses] = useState<Array<Expense>>([
		{
			id: 'e2',
			title: 'A pair of pants',
			amount: 89.99,
			dateCreated: new Date(2022, 0, 5),
		},
	]);

	const addExpense = (expense: Expense) => {
		setExpenses([...expenses, expense]);
	};
	const deleteExpense = (expense: Expense) => {
		setExpenses(expenses.filter((item) => expense.id !== item.id));
	};
	const updateExpense = (expense: Expense) => {
		const expenseIndex = expenses.findIndex((item) => item.id === expense.id);
		if (expenseIndex === -1) return;
		setExpenses(expenses.toSpliced(expenseIndex, 1, expense));
	};

	const context = {
		expenses,
		addExpense,
		deleteExpense,
		updateExpense,
	};

	return (
		<ExpensesContext.Provider value={context}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContext;
