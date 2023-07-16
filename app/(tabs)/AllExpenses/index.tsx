import { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import { ExpensesOutput } from '../../../components';
import { styles } from './allExpensesStyle';

const AllExpenses = () => {
	const expenseData = useContext(ExpensesContext);

	console.log('AllExpenses', expenseData);
	return <ExpensesOutput periodName='Total' expenses={expenseData.expenses} />;
};

export default AllExpenses;
