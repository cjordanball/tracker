import { View, Text, Button } from 'react-native';
import { styles } from './errorStyle';

interface ErrorOverlayProps {
	message: string;
	onConfirm: () => void;
}

const ErrorOverlay = ({ message, onConfirm }: ErrorOverlayProps) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>Sorry, an error occurred!</Text>
			<Text style={[styles.text]}>{message}</Text>
			<Button title='Okay' onPress={onConfirm} />
		</View>
	);
};

export default ErrorOverlay;
