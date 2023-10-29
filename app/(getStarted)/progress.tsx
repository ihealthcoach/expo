import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Button from "@/components/Button";

const GSmealsAndDiet = () => {
  const router = useRouter();

  return (
    <View className="flex flex-1 items-center justify-center bg-[#66eed1]">
      <View className="mb-24 flex items-center">
        <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
          Track your workouts and
        </Text>
        <Text className="-mt-1 font-interExtraBold text-5xl leading-tight text-primary-900">
          Progress
        </Text>
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"goals"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Already have an account?
          <Text className="font-interBold"> Sign in</Text>{" "}
        </Text>
      </View>
    </View>
  );
};
export default GSmealsAndDiet;
