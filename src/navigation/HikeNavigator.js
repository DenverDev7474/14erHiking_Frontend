import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import HikeListScreen from "../screens/hike/HikeListScreen";
import DetailHikeScreen from "../screens/hike/DetailHikeScreen";
import Color from "../constants/colors";
import HikeListTile from '../components/common/HikeListTile'
import AddNewHikeModal from "../components/common/AddNewHikeModal";
import { useNavigation } from "@react-navigation/native";

export default function HikeNavigator() {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName="Hikelist">
      <Stack.Group>
        <Stack.Screen
          name="HikeListScreen"
          component={HikeListScreen}
          options={{
            header: (props) => (
              <View style={{ flexDirection: 'column', height: 200, backgroundColor: "#CCE1EF" }}>
                <View style={{flex: 1}}>
                  <Image source={require('../assets/images/mountain.jpg')} 
                  style={{ width: 50, height: 50,  marginTop: 70, marginLeft: 17}}
                  />
                </View>
                <View style={{ marginHorizontal: 15, height: 60, alignItems:"center", justifyContent: "space-between", flexDirection: "row"}}> 
                  <Text style={styles.headerTitle}>Find a Hike</Text>
                  <TouchableOpacity
                      style={styles.buttonContainerLarge}
                      onPress={() => navigation.navigate("AddNewHike")}
                  >
                    <Text style={styles.buttonText}>Plan A Hike</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="DetailHike"
          component={DetailHikeScreen}
          options={{
            header: (props) => (
              <View
                style={{
                  height: 130,
                  backgroundColor: "#CCE1EF",
                  display: "flex",
                }}
              >
                <View style={styles.buttonContainerSmall}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="AddNewHike"
          component={AddNewHikeModal}
          options={{
            header: (props) => (
              <View
                style={{
                  height: 130,
                  backgroundColor: "#CCE1EF",
                  display: "flex",
                }}
              >
                <View style={styles.buttonContainerSmall}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontFamily: "robotoSlab",
    color: Color.primaryDarkBlue,
  },
  buttonContainerSmall: {
    padding: 10,
    backgroundColor: Color.primaryDarkBlue,
    borderRadius: 5,
    width: 60,
  },
  buttonContainerLarge: {
    padding: 10,
    backgroundColor: Color.primaryDarkBlue,
    borderRadius: 5,
    height:40,
    width: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
