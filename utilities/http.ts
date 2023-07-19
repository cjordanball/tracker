import axios from 'axios';
import { Expense } from '../types';

const targetURLRoot = 'https://tracker-cjb-default-rtdb.firebaseio.com';

export const addExpense = (expenseData: Expense) => {
	const didDelete = delete expenseData.id;
	if (!didDelete) return;
	axios.post(`${targetURLRoot}/expenses.json`, expenseData);
};
