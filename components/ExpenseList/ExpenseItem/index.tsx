import { Text, View, Pressable } from 'react-native';
import { styles } from './expenseItemStyle';
import { Expense } from '../../../types';
import { dateFormatter } from '../../../utilities';
import { useNavigation } from 'expo-router';

interface ExpenseItemProps {
	expense: Expense;
}

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
	const nav = useNavigation();

	const expensePressHandler = () => {
		nav.navigate('ManageExpense', { expense });
	};

	return (
		<Pressable
			onPress={expensePressHandler}
			style={({ pressed }) => (pressed ? styles.pressed : null)}
		>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{expense.title}
					</Text>
					<Text style={styles.textBase}>
						{dateFormatter(new Date(expense.dateCreated))}
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
