import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HikeNavigator from "./HikeNavigator";
// import CalendarNavigator from "./CalendarNavigator";
// import InfoNavigator from "./InfoNavigator";
import Colors from '../constants/colors';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHiking, faCalendar, faMountain } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator
        initialRouteName="HikeTAB"
        activeColor={Colors.lightBlue}
        inactiveColor={Colors.secondaryGreen}
        style={{ backgroundColor: Colors.primaryDarkBlue }}
        barStyle={{ backgroundColor: Colors.primaryDarkBlue }}
        pressColor={{ backgroundColor: Colors.primaryDarkBlue }}
        shifting={false}
        sceneAnimationEnabled={false} 
      >
        <Tab.Screen
          name="HikeTAB"
          component={HikeNavigator}
          options={{
            tabBarLabel: <Text style={styles.barLabel}>HIKE</Text>,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHiking} size={24} color={color} style={{ backgroundColor: 'transparent' }}/>
            ),
          }}
        />
        <Tab.Screen
          name="CalendarTAB"
          component={HikeNavigator}
          options={{
            tabBarLabel: <Text style={styles.barLabel}>CALENDAR</Text>,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faCalendar} size={24} color={color} style={{ backgroundColor: 'transparent' }}/>
            ),
          }}
        />
        <Tab.Screen
          name="InfoTAB"
          component={HikeNavigator}
          options={{
            tabBarLabel: <Text style={styles.barLabel}>INFO</Text>,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMountain} size={24} color={color} style={{ backgroundColor: 'transparent' }}/>
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barLabel: {
    fontSize: 15,
    fontFamily: "robotoSlabLight",
    fontWeight: "500",
    lineHeight: 35,
  },
});