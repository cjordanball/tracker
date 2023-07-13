import { FlatList, Text } from 'react-native';
import { Expense } from '../../types';
import { ExpenseItem } from '../';

interface ExpensesListProps {
	expenses: Array<Expense>;
}

const renderExpenseItem = (itemData: any) => {
	return <ExpenseItem expense={itemData.item} />;
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ExpensesList;
