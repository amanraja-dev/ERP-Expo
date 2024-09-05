import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { black, red } from "../assets/colors/colors";
import HomeStack from './HomeStack';
import Message from "../screens/Message";
import ID from "../screens/ID";
import Notification from "../screens/Notification";
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-filled';
              break;
            case 'Message':
              iconName = 'message';
              break;
            case 'ID':
              iconName = 'document-scanner';
              break;
            case 'Notification':
              iconName = 'notifications-on';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: red,
        tabBarInactiveTintColor: black,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="ID" component={ID} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
