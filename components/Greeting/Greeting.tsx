import { View, Text } from "react-native";

// Zustand
import { useUserStore } from "@/store/usersStore";

import React from "react";
import Badge from "@/components/Badge/Badge";

const Greeting = () => {
  const firstName = useUserStore((state) => state.firstName);
  return (
    <View className="mb-6 mt-2 items-start justify-start">
      <Text className="font-interLight text-3xl leading-9">Good Morning</Text>
      <Text className="mb-3 font-interBold text-3xl leading-9">
        {firstName}
      </Text>
      {/* FIX: Decrease padding on the badge container */}
      <View className="mb-3 flex-row">
        <Badge text="Muscle building" hasBorder />
        <Badge hasBorder text="3 meals" />
        <Badge hasBorder text="12 weeks" />
        <Badge hasBorder text="Vegan" />
      </View>
      <Text className="font-interRegular text-sm">
        Great start of the day, a little more to reach today’s goals
      </Text>
    </View>
  );
};

export default Greeting;
