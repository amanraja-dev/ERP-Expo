import React from "react";
import { View, Text, ScrollView } from "react-native";
import MessageHeader from "../components/MessageHeader";
import NoMessage from "../components/NoMessage";
import BottomNav from "../components/BottomNav";

const Message = ({ navigation }) => {
  return (
    <>
      <MessageHeader navigation={navigation} />

      <ScrollView scroll showsVerticalScrollIndicator={false}>
        <NoMessage />
      </ScrollView>
    </>
  );
};

export default Message;
