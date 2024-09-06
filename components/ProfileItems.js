import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { black, white, darkgrey } from "../assets/colors/colors";

const ProfileItems = ({ navigation }) => {
  const profileOptions = [
    { iconName: "account-details-outline", title: "Personal Detail", navigateTo: "PersonalDetails" },
    { iconName: "phone-in-talk-outline", title: "Contact Detail", navigateTo: "ContactDetails" },
    { iconName: "map-marker-outline", title: "Postal Detail", navigateTo: "PostalDetail" },
    { iconName: "account-convert-outline", title: "Update Profile Photo", navigateTo: "ProfilePhoto" },
    { iconName: "handshake-outline", title: "Contact Us", navigateTo: "ContactUs" },
    { iconName: "information-outline", title: "About Us", navigateTo: "AboutUs" },
    { iconName: "shield-account-variant-outline", title: "Privacy Policy", navigateTo: "PrivacyPolicy" },
    { iconName: "face-agent", title: "Support", navigateTo: "Support" },
    { iconName: "lock-reset", title: "Change Password", navigateTo: "ChangePass" },
    { iconName: "share", title: "Share App", navigateTo: "ShareApp" },
    { iconName: "star", title: "Rate App", navigateTo: "RateApp" },
    { iconName: "logout", title: "Logout", navigateTo: "Login" },
  ];

  const renderProfileItem = ({ iconName, title, navigateTo }) => (
    <TouchableOpacity
      key={title}
      style={styles.ProfileItem}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <Icon name={iconName} size={30} color={darkgrey} />
      <Text style={styles.itemText}>{title}</Text>
      <Icon name="chevron-right" size={30} color={darkgrey} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {profileOptions.map(renderProfileItem)}
    </View>
  );
};

export default ProfileItems;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  ProfileItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: white,
    borderRadius: 5,
    justifyContent: "space-between",
    width: "90%",
    elevation: 2,
    shadowColor: black,
  },
  itemText: {
    paddingLeft: 20,
    fontWeight: "500",
    flex: 1,
  },
});