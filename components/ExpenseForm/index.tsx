import { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './expenseFormStyle';
import { Input } from './Input';
import { Expense } from '../../types';
import { CustButton } from '../';
import { useNavigation } from 'expo-router';
import { validator } from '../../utilities';

interface ExpenseFormProps {
	onCancel: () => void;
	onSubmit: (e: Expense) => void;
	submitButtonLabel: string;
	expense?: Expense;
}

const ExpenseForm = ({
	onCancel,
	onSubmit,
	submitButtonLabel,
	expense,
}: ExpenseFormProps) => {
	const nav = useNavigation();
	const [inputs, setInputs] = useState({
		amount: {
			value: expense ? expense.amount.toString() : '',
			isValid: true,
		},
		date: {
			value: expense ? expense.dateCreated : '',
			isValid: true,
		},
		description: {
			value: expense ? expense.title : '',
			isValid: true,
		},
	});

	const dataChangedHandler = (inputType: string, enteredValue: string) => {
		setInputs((prevInputs) => {
			return {
				...prevInputs,
				[inputType]: { value: enteredValue, isValid: true },
			};
		});
	};

	const submitHandler = () => {
		const expense: Expense = {
			amount: +inputs.amount.value,
			dateCreated: inputs.date.value,
			title: inputs.description.value,
		};
		const isValid =
			validator(expense.amount, 'amount') &&
			validator(expense.dateCreated, 'date') &&
			validator(expense.title, 'description');
		isValid
			? onSubmit(expense)
			: setInputs((currentInputs) => {
					return {
						amount: {
							value: currentInputs.amount.value,
							isValid: validator(expense.amount, 'amount'),
						},
						date: {
							value: currentInputs.date.value,
							isValid: validator(expense.dateCreated, 'date'),
						},
						description: {
							value: currentInputs.description.value,
							isValid: validator(expense.title, 'description'),
						},
					};
			  });
	};

	const formIsInvalid = !(
		inputs.amount.isValid &&
		inputs.date.isValid &&
		inputs.description.isValid
	);

	return (
		<View style={styles.form}>
			<Text style={styles.titleText}>Your Expense</Text>
			<View style={styles.amtDateRegion}>
				<Input
					style={styles.amtDateInput}
					label='Amount'
					invalid={!inputs.amount.isValid}
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: dataChangedHandler.bind(this, 'amount'),
						value: inputs.amount.value,
					}}
				/>
				<Input
					style={styles.amtDateInput}
					label='Date'
					invalid={!inputs.date.isValid}
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: dataChangedHandler.bind(this, 'date'),
						value: inputs.date.value,
					}}
				/>
			</View>
			<Input
				label='Description'
				invalid={!inputs.description.isValid}
				textInputConfig={{
					multiline: true,
					autoCorrect: true,
					autoCapitalize: 'sentences',
					onChangeText: dataChangedHandler.bind(this, 'description'),
					value: inputs.description.value,
				}}
			/>
			{formIsInvalid && (
				<Text style={styles.errorText}>Invalid Values - Please Check</Text>
			)}
			<View style={styles.buttonsRegion}>
				<CustButton style={styles.custButton} mode='flat' action={onCancel}>
					Cancel
				</CustButton>
				<CustButton
					style={styles.custButton}
					mode='not-flat'
					action={submitHandler}
				>
					{submitButtonLabel}
				</CustButton>
			</View>
		</View>
	);
};

export default ExpenseForm;
