import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './app/routes/AppStackNavigator'
//const AuthContext = React.createContext();

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}