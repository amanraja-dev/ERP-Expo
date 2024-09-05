import { StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

import BottomNav from "../components/BottomNav";
import HomeHeader from "../components/home-components/HomeHeader";
import CollegeTitle from "../components/home-components/CollegeTitle";
import ImageSlider from "../components/home-components/ImageSlider";
import AttenceCard from "../components/home-components/AttenceCard";
import HomeItems from "../components/home-components/HomeItems";
import Schedule from "../components/home-components/Schedule";
import Fee from "../components/home-components/Fee";

const Home = ({ navigation }) => {
  return (
    <>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollCSS}>
        <CollegeTitle />
        {/* <ImageSlider/>
        <AttenceCard/> */}
        <HomeItems navigation={navigation} />
        <Schedule />
        <Fee />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollCSS: {
    padding: 0,
    backgroundColor: "#f2f2f2",
  },
});

export default Home;
