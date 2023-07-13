import { Text, View, Pressable } from 'react-native';
import { styles } from './expenseItemStyle';
import { Expense } from '../../types';
import { dateFormatter } from '../../utilities';

interface ExpenseItemProps {
	expense: Expense;
}

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
	return (
		<Pressable>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{expense.title}
					</Text>
					<Text style={styles.textBase}>
						{dateFormatter(expense.dateCreated)}
					</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>{`$${expense.amount.toFixed(2)}`}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ExpenseItem;
