import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React from "react";
import { View } from "react-native";

// Context
// import { useProgressBar } from "@/context/useProgressBar";

const landingpage = () => {
  // const { incrementProgress } = useProgressBar();

  // const handlePress = () => {
  //   const incrementValue = progress !== undefined ? progress : 5;
  //   incrementProgress(incrementValue);
  //   if (setIsVisible) {
  //     setIsVisible(false);
  //   }
  //   // if (handleHideComponent) {
  //   //   handleHideComponent();
  //   // }
  //   setTimeout(() => {
  //     router.push(path as StaticRoutes);
  //   }, 100);
  // };

  return (
    <View className="flex-1">
      <Header />
      <Greeting />
      <TodayGoals />
    </View>
  );
};

export default landingpage;
