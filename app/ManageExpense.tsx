import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './manageExpenseStyle';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CustButton, IconButton } from '../components';
import { GlobalStyles } from '../constants/Colors';

// interface ManageExpenseProps {
// 	expenseId: string;
// }

const ManageExpense = () => {
	const route = useRoute();
	const nav = useNavigation();
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		nav.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [nav, isEditing]);

	const deleteExpenseHandler = () => {
		console.log('Pressed and Deleted!');
		nav.goBack();
	};

	const cancelHandler = () => {
		console.log('Canceling!');
		nav.goBack();
	};

	const confirmHandler = () => {
		console.log('Confirming!');
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
