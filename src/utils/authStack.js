import React from "react";
import LoginScreen from '../screens/login/LoginScreen';
import SignupScreen from '../screens/login/SignupScreen';
import TabNavigator from "../navigation/TabNavigator";



import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const AuthStack = () => {


  function MainScreen() {
    return <TabNavigator />;
  }
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#072649" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Main" component={MainScreen} 
        options={{
          headerShown: false,
        }}  
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
