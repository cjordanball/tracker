import { useContext } from 'react';
import { View } from 'react-native';
import { ExpensesList, ExpensesSummary } from '../..';
import { Expense } from '../../../types';
import { styles } from './expensesOutputStyle';
import ExpensesContext from '../../../store/expenses-context';

interface ExpensesOutputProps {
	expenses?: Array<Expense>;
	periodName: string;
}
const ExpensesOutput = ({ expenses = [], periodName }: ExpensesOutputProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={periodName} />
			<ExpensesList expenses={expenses} />
		</View>
	);
};

export default ExpensesOutput;
