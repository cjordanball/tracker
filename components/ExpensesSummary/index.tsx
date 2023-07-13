import { View, Text } from 'react-native';
import { Expense } from '../../types';
import { styles } from './expensesSummaryStyle';

interface ExpensesSummaryProps {
	periodName: string;
	expenses: Array<Expense>;
}

const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryProps) => {
	const expensesTotal = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}>{`$${expensesTotal.toFixed(2)}`}</Text>
		</View>
	);
};

export default ExpensesSummary;
