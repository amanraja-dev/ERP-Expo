import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  Octicons,
  FontAwesome,
} from "@expo/vector-icons";

const BottomNav = ({ navigation }) => {
  return (
    <>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="home-filled" size={24} color="black" />
            <Text style={{ fontSize: 10 }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Message")}>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="message" size={24} color="black" />
            <Text style={{ fontSize: 10 }}>Message</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ID")}>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="document-scanner" size={24} color="black" />
            <Text style={{ fontSize: 10 }}>ID Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="notifications-on" size={24} color="black" />
            <Text style={{ fontSize: 10 }}>Notification</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="person" size={24} color="black" />
            <Text style={{ fontSize: 10 }}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Icon: {
    width: 28,
    height: 28,
  },
});
export default BottomNav;
