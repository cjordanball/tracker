import { useContext } from 'react';
import { ExpensesContext } from '../../../store/expenses-context';
import { ExpensesOutput } from '../../../components';
import { styles } from './allExpensesStyle';

const AllExpenses = () => {
	const expenseData = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			periodName='Total'
			expenses={expenseData.expenses}
			fallbackText='No items at all!'
		/>
	);
};

export default AllExpenses;
