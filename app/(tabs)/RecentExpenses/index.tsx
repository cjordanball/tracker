import { Text, View } from 'react-native';
import { ExpensesOutput } from '../../../components';
import { styles } from './recentExpensesStyle';

const RecentExpenses = () => {
	return <ExpensesOutput periodName='Last 7 Days' />;
};

export default RecentExpenses;
