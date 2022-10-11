// External imports
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// Components.
import TodoInProgress from "./TodoInProgress";
import TodoCompleted from "./TodoComplete";

// Create tab hook.
const Tab = createBottomTabNavigator();

export default function AboutTabNavigator() {

  // Create tab stack using the above components imported.
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: { backgroundColor: "red",fontSize:15 },
      }}
    >
      <Tab.Screen 
        name="In Progress" 
        component={TodoInProgress} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../../assets/todolist.png')} style={{width:30,height:30}}  />
          ),
        }}
        />
      <Tab.Screen 
        name="Completed" 
        component={TodoCompleted}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../../assets/done_todolist.png')} style={{width:30,height:30}}  />
          ),
        }}/>
    </Tab.Navigator>
  );
}
