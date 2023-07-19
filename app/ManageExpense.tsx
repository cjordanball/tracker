import { useLayoutEffect, useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { View, TextInput } from 'react-native';
import { styles } from './manageExpenseStyle';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CustButton, IconButton, ExpenseForm } from '../components';
import { GlobalStyles } from '../constants/Colors';
import { Expense } from '../types';
import { addExpense } from '../utilities/http';

const ManageExpense = () => {
	const expenseData = useContext(ExpensesContext);
	const route = useRoute();
	const nav = useNavigation();
	const editedExpenseId = route.params?.expense.id;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		nav.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [nav, isEditing]);

	const hotExpense: Expense | undefined = expenseData.expenses.find(
		(expense: Expense) => expense.id === editedExpenseId
	);

	const cancelHandler = () => {
		nav.goBack();
	};

	const confirmHandler = (expense: Expense) => {
		if (isEditing) {
			expense.id = editedExpenseId;
			expenseData.updateExpense(expense);
		} else {
			addExpense(expense);
			expenseData.addExpense(expense);
		}
		nav.goBack();
	};

	const deleteExpenseHandler = () => {
		expenseData.deleteExpense(route.params?.expense);
		nav.goBack();
	};

	return (
		<View style={styles.container}>
			<ExpenseForm
				expense={hotExpense}
				onCancel={cancelHandler}
				onSubmit={confirmHandler}
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
			/>
			{isEditing && (
				<View style={styles.trashButtonRegion}>
					<IconButton
						icon='trash'
						color={GlobalStyles.colors.error500}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpense;
