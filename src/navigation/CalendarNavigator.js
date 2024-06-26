import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CalendarScreen from '../screens/calendar/CalendarScreen';
import CalendarDetailScreen from "../screens/calendar/CalendarDetailScreen";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Color from "../constants/colors";

const Stack = createNativeStackNavigator();

export default function CalendarNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CalendarScreen">
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          header: (props) => (
            <View style={{ height: 130, backgroundColor: "#CCE1EF" }}>
              <Text style={styles.headerTitle}>Your Hikes</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CalendarDetail"
        component={CalendarDetailScreen}
        options={{
          header: (props) => (
            <View
              style={{
                height: 130,
                backgroundColor: "#CCE1EF",
                display: "flex",
              }}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.buttonText}
                    onPress={() => navigation.navigate("CalendarScreen")}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    marginLeft: 17,
    fontFamily: "robotoSlab",
    bottom: 0,
    color: Color.primaryDarkBlue,
    top: 70,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: Color.primaryDarkBlue,
    borderRadius: 5,
    width: 60,
    top: 80,
    position: "absolute",
    right: 17,
    bottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
