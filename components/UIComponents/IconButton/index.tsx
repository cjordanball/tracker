import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './iconButtonStyle';

interface IconButtonProps {
	icon: any;
	size: number;
	color?: string;
	onPress: () => void;
}

const IconButton = ({
	icon,
	size,
	color = 'white',
	onPress,
}: IconButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => (pressed ? styles.pressed : null)}
		>
			<View>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	);
};

export default IconButton;
