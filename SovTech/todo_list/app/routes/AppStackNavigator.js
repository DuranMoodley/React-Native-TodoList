// External imports.
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StyleSheet, View } from "react-native";

// Components.
import AppText from "../components/AppText";
import HomeScreen from '../screens/TodoList/index';

// Create stack hook.
const Stack = createStackNavigator();

const windowWidth = Dimensions.get("window").width;
const iconSize = 24;

// Header to be used on stack.
const HeaderTitle = ({ title }) => {
	return (
		<View style={styles.container}>
			<AppText style={[styles.headerTitle,{color:'white'}]} numberOfLines={1}>
				{title}
			</AppText>
		</View>
	);
};

// Create about stack.
const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor:'red'
				},
				headerShown: true
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTitle: () => <HeaderTitle title="Todo" />,
				}}
			/>
		</Stack.Navigator>
	);
};

// Styles.
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		height: "100%",
	},
	headerTitle: {
		color: "black",
		fontSize: 24,
		letterSpacing: 1,
		overflow: "hidden",
		width: windowWidth - iconSize * 2 - 20,
		textAlign: "center",
	},
	icon: {
		marginLeft: 10,
	},
});

export default HomeStack;
