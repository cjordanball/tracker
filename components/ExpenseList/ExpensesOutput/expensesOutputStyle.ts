import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	infoText: {
		color: GlobalStyles.colors.basicWhite,
		fontSize: 16,
		textAlign: 'center',
		marginTop: 32,
	},
});
