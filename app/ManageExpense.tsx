import { useLayoutEffect, useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { View } from 'react-native';
import { styles } from './manageExpenseStyle';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CustButton, IconButton } from '../components';
import { GlobalStyles } from '../constants/Colors';
import { Expense } from '../types';

// interface ManageExpenseProps {
// 	hotExpense: Expense;
// }

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

	const deleteExpenseHandler = () => {
		console.log('Pressed and Deleted!');
		expenseData.deleteExpense(route.params?.expense);
		nav.goBack();
	};

	const cancelHandler = () => {
		console.log('Canceling!');
		nav.goBack();
	};

	const confirmHandler = () => {
		console.log('Confirming!');
		if (isEditing) {
			expenseData.updateExpense({ title: 'screwdriver' });
		} else {
			expenseData.addExpense({
				title: 'screwdriver',
				amount: 5.0,
				dateCreated: new Date().toString(),
			});
		}
		nav.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonsRegion}>
				<CustButton
					style={styles.custButton}
					mode='flat'
					action={cancelHandler}
				>
					Press
				</CustButton>
				<CustButton
					style={styles.custButton}
					mode='not-flat'
					action={confirmHandler}
				>
					{isEditing ? 'Update' : 'Add'}
				</CustButton>
			</View>
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
