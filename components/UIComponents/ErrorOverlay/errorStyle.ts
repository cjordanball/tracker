import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	text: {
		textAlign: 'center',
		marginBottom: 8,
		color: GlobalStyles.colors.basicWhite,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
