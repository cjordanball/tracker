import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../../store/expenses-context';
import { ExpensesOutput } from '../../../components';
import { getDateMinusDays } from '../../../utilities';
import { fetchExpenses } from '../../../utilities/http';
import { Overlay, ErrorScreen } from '../../../components';

const RecentExpenses = () => {
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const expenseData = useContext(ExpensesContext);

	useEffect(() => {
		const getExpenses = async () => {
			setIsFetching(true);
			try {
				const expenses = await fetchExpenses();
				expenses ? expenseData.setExpenses(expenses) : null;
			} catch (err) {
				setError('Could not fetch expenses!');
			}
			setIsFetching(false);
		};
		getExpenses();
	}, []);

	const recentExpenseData = expenseData.expenses?.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);
		return new Date(expense.dateCreated) >= date7DaysAgo;
	});

	const errorHandler = () => {
		setError(null);
	};

	if (isFetching) return <Overlay />;
	if (error)
		return (
			<ErrorScreen
				message={error}
				onConfirm={() => {
					errorHandler();
				}}
			/>
		);

	return (
		<ExpensesOutput
			periodName='Last 7 Days'
			expenses={recentExpenseData}
			fallbackText='Nothing happening lately!'
		/>
	);
};

export default RecentExpenses;
