import { View, Text } from 'react-native';
import { ExpensesList, ExpensesSummary } from '../..';
import { Expense } from '../../../types';
import { styles } from './expensesOutputStyle';

interface ExpensesOutputProps {
	expenses?: Array<Expense>;
	periodName: string;
	fallbackText: string;
}
const ExpensesOutput = ({
	expenses = [],
	periodName,
	fallbackText,
}: ExpensesOutputProps) => {
	let content = <Text style={styles.infoText}>{fallbackText}</Text>;
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={periodName} />
			{expenses.length > 0 ? <ExpensesList expenses={expenses} /> : content}
		</View>
	);
};

export default ExpensesOutput;
