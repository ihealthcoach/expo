import { View, Text } from "react-native";
import React from "react";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";

const TodaysGoals = () => {
  return (
    <View className="mx-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="pr-1 font-interSemiBold text-lg">Today's goals</Text>
          <ChevronDownIcon />
        </View>
        <View className="flex-row items-center">
          <Text className="pr-1 font-interMedium">Edit goals</Text>
          <ArrowRightIcon />
        </View>
      </View>
    </View>
  );
};

export default TodaysGoals;
