import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/Colors';

interface InputProps {
	label: string;
	invalid: boolean;
	textInputConfig?: {
		keyboardType?: 'decimal-pad' | 'default';
		placeholder?: string;
		maxLength?: number;
		onChangeText: (v: string) => void;
		autoCorrect?: boolean;
		multiline?: boolean;
		autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
		value?: string;
	};
	style?: object;
}

export const Input = ({
	label,
	invalid,
	style,
	textInputConfig,
}: InputProps) => {
	const inputStyles: Array<any> = [styles.inputText];
	if (textInputConfig?.multiline) {
		inputStyles.push(styles.inputMultiline);
	}
	if (invalid) {
		inputStyles.push(styles.invalidInput);
	}

	return (
		<View style={[styles.container, style]}>
			<Text style={[styles.labelText, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput style={inputStyles} {...textInputConfig} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	labelText: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	inputText: {
		backgroundColor: GlobalStyles.colors.primary100,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
		color: GlobalStyles.colors.primary700,
	},
	inputMultiline: {
		textAlignVertical: 'top',
		height: 100,
	},
	invalidLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});
