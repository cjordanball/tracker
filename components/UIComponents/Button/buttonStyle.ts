import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		borderRadius: 4,
		padding: 8,
		backgroundColor: GlobalStyles.colors.primary500,
	},
	flat: {
		backgroundColor: 'transparent',
	},
	buttonText: {
		color: GlobalStyles.colors.basicWhite,
		textAlign: 'center',
	},
	flatText: {
		color: GlobalStyles.colors.primary200,
	},
	pressed: {
		opacity: 0.5,
		backgroundColor: GlobalStyles.colors.primary100,
		borderRadius: 4,
	},
});
