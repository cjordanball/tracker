import { useLayoutEffect, useContext, useState } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { View, TextInput } from 'react-native';
import { styles } from './manageExpenseStyle';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CustButton, IconButton, ExpenseForm } from '../components';
import { GlobalStyles } from '../constants/Colors';
import { Expense } from '../types';
import { addExpense, deleteExpense, updateExpense } from '../utilities/http';
import { Overlay, ErrorScreen } from '../components';

const ManageExpense = () => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
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

	const confirmHandler = async (expense: Expense) => {
		setIsSubmitting(true);
		try {
			if (isEditing) {
				expense.id = editedExpenseId;
				expenseData.updateExpense(expense);
				await updateExpense(expense);
			} else {
				const data = await addExpense(expense);
				expense.id = data;
				expenseData.addExpense(expense);
			}
			nav.goBack();
		} catch {
			setError(
				isEditing ? 'Sorry, cannot edit now.' : 'Sorry, expense not added.'
			);
			setIsSubmitting(false);
		}
	};

	const deleteExpenseHandler = async () => {
		setIsSubmitting(true);
		try {
			await deleteExpense(editedExpenseId);
			expenseData.deleteExpense(editedExpenseId);
			nav.goBack();
		} catch (err) {
			setError("Can't delete!  Guess you are stuck with it!");
			setIsSubmitting(false);
		}
	};

	const errorHandler = () => {
		setError(null);
	};

	if (error) return <ErrorScreen message={error} onConfirm={errorHandler} />;
	if (isSubmitting) return <Overlay />;

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
