import { View, ActivityIndicator } from 'react-native';
import { styles } from './overlayStyle';

const LoadingOverlay = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='white' />
		</View>
	);
};

export default LoadingOverlay;
