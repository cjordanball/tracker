import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: GlobalStyles.colors.basicWhite,
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
			}}
		>
			<Tabs.Screen
				name='RecentExpenses/index'
				options={{
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='hourglass' color={color} size={size} />
					),
					headerRight: () => (
						<Link href='/ManageExpense' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='AllExpenses/index'
				options={{
					title: 'All Expenses',
					tabBarLabel: 'Expenses',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
