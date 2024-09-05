import React from "react";
import { ScrollView } from "react-native";

import ProfileHeader from "../components/ProfileHeader";
import ProfileItems from "../components/ProfileItems";
import BottomNav from "../components/BottomNav";

const Profile = ({ navigation }) => {
  return (
    <>
      <ProfileHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={true}>
        <ProfileItems navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Profile;
