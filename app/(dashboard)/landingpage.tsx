import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodaysGoals from "@/components/TodaysGoals";
import React from "react";
import { Text, View } from "react-native";

// Test data
// import data from "@/app/(dashboard)/data.json";

// import { imageUrl } from "@/assets/images/dashboard-landingpage/avatar.png";
// /home/zvzk/VS/reactnative/ihealth/assets/images/dashboard-landingpage/avatar.png
// import avatarImage from "/app/assets/images/dashboard-landingpage/avatar.png";

const landingpage = () => {
  return (
    <View className="flex-1">
      <Header />
      <Greeting />
      <TodaysGoals />
    </View>
  );
};

export default landingpage;
