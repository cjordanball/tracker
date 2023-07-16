import { createContext, useReducer } from 'react';
import { Expense } from '../types';

export const ExpensesContext = createContext({
	expenses: [] as Array<Expense>,
	addExpense: (expense: Expense) => {},
	deleteExpense: (expense: Expense) => {},
	updateExpense: (expense: Expense) => {},
});

const expensesReducer = (state: Array<Expense>, action: any) => {
	switch (action.type) {
		case 'ADD':
			const id = Date.now().toString(10) + Math.random().toString(10);
			action.payload.id = id;
			return [action.payload, ...state];
		case 'DELETE':
			return state.filter((item) => item.id !== action.payload.id);
		case 'UPDATE':
			const expenseIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);
			if (expenseIndex === -1) return state;
			const modItem = { ...state[expenseIndex], ...action.payload };
			const newState = [...state];
			newState[expenseIndex] = modItem;
			return newState;
		default:
			return state;
	}
};

interface ExpensesContextProviderProps {
	children: React.ReactNode;
}

const ExpensesContextProvider = ({
	children,
}: ExpensesContextProviderProps) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, [
		{
			id: 'eu',
			title: 'hammer',
			amount: 3.97,
			dateCreated: new Date(2022, 11, 14).toString(),
		},
	]);

	const addExpense = (expense: Expense) => {
		dispatch({ type: 'ADD', payload: expense });
	};
	const deleteExpense = (expense: Expense) => {
		dispatch({ type: 'DELETE', payload: expense });
	};
	const updateExpense = (expense: object) => {
		console.log('Updating expense: ', expense);
		dispatch({ type: 'UPDATE', payload: expense });
	};

	const context = {
		expenses: expensesState,
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

export default ExpensesContextProvider;
