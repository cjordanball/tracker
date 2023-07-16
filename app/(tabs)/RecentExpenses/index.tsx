import { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import { Text, View } from 'react-native';
import { ExpensesOutput } from '../../../components';
import { styles } from './recentExpensesStyle';

const RecentExpenses = () => {
	const expenseData = useContext(ExpensesContext);
	return (
		<ExpensesOutput periodName='Last 7 Days' expenses={expenseData.expenses} />
	);
};

export default RecentExpenses;
