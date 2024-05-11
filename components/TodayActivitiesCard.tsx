import { View, Text } from "react-native";
import React from "react";
import TodayActivitiesRunning from "./TodayActivitiesRunning";
import TodayActivitiesGym from "./TodayActivitiesGym";

const TodayActivitiesCard = () => {
  return (
    <View className="mb-6 rounded-lg bg-white p-4">
      <TodayActivitiesRunning />
      <TodayActivitiesGym />
    </View>
  );
};

export default TodayActivitiesCard;
