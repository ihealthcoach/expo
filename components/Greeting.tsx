import { View, Text } from "react-native";

// Zustand
import { useUserStore } from "@/store/users";

import React from "react";
import Badge from "./Badge/Badge";

const Greeting = () => {
  const firstName = useUserStore((state) => state.firstName);
  return (
    <View className="mb-6 mt-2 items-start justify-start">
      <Text className="font-interLight text-3xl leading-9">Good Morning</Text>
      <Text className="mb-3 font-interBold text-3xl leading-9">
        {firstName}
      </Text>
      <View className="mb-3 flex-row">
        <Badge text="Muscle building" />
        <Badge text="3 meals" />
        <Badge text="12 weeks" />
        <Badge text="Vegan" />
      </View>
      <Text className="font-interRegular text-sm">
        Great start of the day, a little more to reach today’s goals
      </Text>
    </View>
  );
};

export default Greeting;
