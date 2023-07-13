import { useEffect, useState, useCallback } from 'react';
import { useColorScheme, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync(Entypo.font);
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			console.log('App is ready! Hiding splash screen...');
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		console.log('App is not ready! Showing splash screen...');
		return null;
	}

	return (
		<View onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<RootLayoutNav />
		</View>
	);
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack initialRouteName='(tabs)'>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen
						name='ManageExpense'
						options={{ presentation: 'card', title: 'Manage Expense' }}
					/>
				</Stack>
			</ThemeProvider>
		</>
	);
}
