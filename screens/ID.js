import { View, Text, ScrollView } from "react-native";
import React from "react";
import SimpleHeader from "../components/basic-components/SimpleHeader";
import BottomNav from "../components/BottomNav";
import IDCard from "../components/IDCard";

const ID = ({ navigation }, props) => {
  return (
    <>
      <SimpleHeader navigation={navigation} title="ID" />
      <ScrollView scroll showsVerticalScrollIndicator={false}>
        <IDCard navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default ID;
