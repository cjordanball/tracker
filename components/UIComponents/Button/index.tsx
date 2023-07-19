import { Pressable, Text, View } from 'react-native';
import { styles } from './buttonStyle';

interface ButtonProps {
	children: string;
	action: () => void;
	mode?: 'flat' | 'not-flat';
	style?: object;
}

const Button = ({ children, action, mode = 'flat', style }: ButtonProps) => {
	return (
		<View style={style}>
			<Pressable
				onPress={action}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View style={[styles.container, mode === 'flat' && styles.flat]}>
					<Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default Button;
