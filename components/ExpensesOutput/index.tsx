import { View } from 'react-native';
import { ExpensesList, ExpensesSummary } from '../../components';
import { Expense } from '../../types';
import { styles } from './expensesOutputStyle';

const DUMMY_EXPENSES: Array<Expense> = [
	{
		id: 'e1',
		title: 'A pair of shoes',
		amount: 59.99,
		dateCreated: new Date(2021, 11, 19),
	},
	{
		id: 'e2',
		title: 'A pair of pants',
		amount: 89.99,
		dateCreated: new Date(2022, 0, 5),
	},
	{
		id: 'e3',
		title: 'bananas',
		amount: 5.99,
		dateCreated: new Date(2021, 11, 1),
	},
	{
		id: 'e4',
		title: 'A book',
		amount: 14.99,
		dateCreated: new Date(2022, 1, 19),
	},
	{
		id: 'e5',
		title: 'Another book',
		amount: 18.59,
		dateCreated: new Date(2022, 1, 18),
	},
];

interface ExpensesOutputProps {
	expenses?: Array<Expense>;
	periodName: string;
}
const ExpensesOutput = ({
	expenses = DUMMY_EXPENSES,
	periodName,
}: ExpensesOutputProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={periodName} />
			<ExpensesList expenses={expenses} />
		</View>
	);
};

export default ExpensesOutput;
