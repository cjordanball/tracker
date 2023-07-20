import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../../../store/expenses-context';
import { ExpensesOutput } from '../../../components';
import { getDateMinusDays } from '../../../utilities';
import { fetchExpenses } from '../../../utilities/http';

const RecentExpenses = () => {
	const expenseData = useContext(ExpensesContext);

	useEffect(() => {
		const getExpenses = async () => {
			const expenses = await fetchExpenses();
			expenses ? expenseData.setExpenses(expenses) : null;
		};
		getExpenses();
	}, []);

	const recentExpenseData = expenseData.expenses?.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);
		return new Date(expense.dateCreated) >= date7DaysAgo;
	});

	return (
		<ExpensesOutput
			periodName='Last 7 Days'
			expenses={recentExpenseData}
			fallbackText='Nothing happening lately!'
		/>
	);
};

export default RecentExpenses;
