import axios from 'axios';
import { Expense } from '../types';

const targetURLRoot = 'https://tracker-cjb-default-rtdb.firebaseio.com';

export const addExpense = async (expenseData: Expense) => {
	const res = await axios.post(`${targetURLRoot}/expenses.json`, expenseData);
	return res.data.name;
};

export const fetchExpenses = async () => {
	try {
		const response = await axios.get(`${targetURLRoot}/expenses.json`);
		const expenses = [];

		for (const key in response.data) {
			const expenseObj: Expense = {
				id: key,
				amount: response.data[key].amount,
				title: response.data[key].title,
				dateCreated: response.data[key].dateCreated,
			};
			expenses.push(expenseObj);
		}

		return expenses.sort(
			(a, b) =>
				new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
		);
	} catch (err) {
		console.log('ERROR: ', err);
	}
};

export const updateExpense = (expenseData: Expense) => {
	const id = expenseData.id;
	const data = { ...expenseData };
	delete data.id;
	return axios.put(`${targetURLRoot}/expenses/${id}.json`, data);
};

export const deleteExpense = (id: string) => {
	return axios.delete(`${targetURLRoot}/expenses/${id}.json`);
};
