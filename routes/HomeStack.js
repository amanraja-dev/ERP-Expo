import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Attendence from "../screens/homeScreens/Attendence";
import ClassSchedule from "../screens/homeScreens/ClassSchedule";
import AttendenceDetails from "../screens/homeScreens/AttendenceDetails";
import SimpleHeader from '../components/basic-components/SimpleHeader';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation, route }) => {
        let title = '';
        let headerShown = true;

        // Customize header title based on the screen
        switch (route.name) {
          case 'HomeScreen':
            headerShown = false; // Hide header on the Home screen
            break;
          case 'Attendence':
            title = 'Attendance'; // Custom title
            break;
          case 'ClassSchedule':
            title = 'Class Schedule'; // Custom title
            break;
          case 'AttendenceDetails':
            title = 'Attendance Details'; // Custom title
            break;
          default:
            title = route.name; // Fallback title
            break;
        }

        return {
          header: () =>
            headerShown && (
              <SimpleHeader
                navigation={navigation}
                title={title}
              />
            ),
        };
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Attendence" component={Attendence} />
      <Stack.Screen name="ClassSchedule" component={ClassSchedule} />
      <Stack.Screen name="AttendenceDetails" component={AttendenceDetails} />
    </Stack.Navigator>
  );
}
