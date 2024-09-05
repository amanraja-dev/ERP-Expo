import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import AboutUs from "../screens/profileScreens/AboutUs";
import SimpleHeader from "../components/basic-components/SimpleHeader";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={({ navigation, route }) => {
        let title = "";
        let headerShown = true;

        // Customize header title based on the screen
        switch (route.name) {
          case "ProfileScreen":
            headerShown = false; // Hide header on the Home screen
            break;
          case "AboutUs":
            title = "About Us"; // Custom title
            break;
          case "ClassSchedule":
            title = "Class Schedule"; // Custom title
            break;
          case "AttendenceDetails":
            title = "Attendance Details"; // Custom title
            break;
          default:
            title = route.name; // Fallback title
            break;
        }

        return {
          header: () =>
            headerShown && (
              <SimpleHeader navigation={navigation} title={title} />
            ),
        };
      }}
    >
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
