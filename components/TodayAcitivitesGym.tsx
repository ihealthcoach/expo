import { View, Text } from "react-native";
import React from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";

const TodayActivitiesGym = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="font-interMedium text-xs text-gray-900">Running</Text>
        <ArrowRightIcon width={20} height={20} fill="#111827" />
      </View>
    </View>
  );
};

export default TodayActivitiesGym;
