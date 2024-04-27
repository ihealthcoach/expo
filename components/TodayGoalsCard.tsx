import { View, Text } from "react-native";
import React from "react";

type TodayGoalsCardProps = {
  title: string;
  bgColor: string;
  marginRight?: boolean;
  icon: React.ReactNode;
  value?: string;
  unit?: string;
  goal: string;
};

const TodayGoalsCard = ({
  title,
  bgColor,
  marginRight,
  icon,
  value,
  unit,
  goal,
}: TodayGoalsCardProps) => {
  return (
    <View
      className="flex basis-1/2 justify-end rounded-lg p-4"
      style={{ backgroundColor: bgColor, marginRight: marginRight ? 8 : 0 }}
    >
      <View className="mb-1">{icon}</View>
      <Text className="android:mb-4 font-interSemiBold text-sm">{title}</Text>
      <Text className="py-2 font-interMedium text-2xl">
        {value} <Text className="text-xs">{unit}</Text>
      </Text>
      <Text className="self-end font-interMedium text-gray-500">/{goal}</Text>
    </View>
  );
};

export default TodayGoalsCard;
