import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/Colors';

export const styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	amtDateRegion: {
		flexDirection: 'row',
		columnGap: 16,
		alignItems: 'center',
	},
	amtDateInput: {
		flex: 1,
	},
	titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: GlobalStyles.colors.basicWhite,
		textAlign: 'center',
		marginVertical: 24,
	},
	buttonsRegion: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	custButton: {
		minWidth: 120,
		marginHorizontal: 8,
	},
	errorText: {
		textAlign: 'center',
		color: GlobalStyles.colors.error500,
		margin: 8,
	},
});
