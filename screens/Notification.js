import React from "react";
import { View, Text, ScrollView } from "react-native";
import SimpleHeader from "../components/basic-components/SimpleHeader";
import NoNotification from "../components/NoNotification";
import BottomNav from "../components/BottomNav";

const Notification = ({ navigation }) => {
  return (
    <>
      <SimpleHeader navigation={navigation} title="Notification" />

      <ScrollView scroll showsVerticalScrollIndicator={false}>
        <NoNotification />
      </ScrollView>
    </>
  );
};

export default Notification;
