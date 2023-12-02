import React from "react";
import { Pressable, Text } from "react-native";

// Expo
import { router } from "expo-router";

const ButtonBack = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
        Back
      </Text>
    </Pressable>
  );
};

export default ButtonBack;
