import { View, Text } from "react-native";
import React from "react";

const Badge = ({ text }: { text?: string }) => {
  // Ensure dynamic className styles are applied after base styles
  return (
    <View className="mr-2 rounded-full border-[1px] border-gray-900 px-2 py-1">
      <Text className="font-interMedium">{text}</Text>
    </View>
  );
};

export default Badge;
