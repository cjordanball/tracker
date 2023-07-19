import { useContext } from 'react';
import { ExpensesContext } from '../../../store/expenses-context';
import { ExpensesOutput } from '../../../components';
import { styles } from './recentExpensesStyle';
import { getDateMinusDays } from '../../../utilities';

const RecentExpenses = () => {
	const expenseData = useContext(ExpensesContext);
	const recentExpenseData = expenseData.expenses.filter((expense) => {
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
