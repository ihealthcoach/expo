import React from "react";
import { Pressable, Text } from "react-native";
import { router } from "expo-router";
import { useProgressBar } from "@/context/useProgressBar";

const ButtonBack = () => {
  const { decrementProgress } = useProgressBar();

  const handleBackPress = () => {
    decrementProgress(12.5);
    router.back();
  };

  return (
    <Pressable onPress={handleBackPress}>
      <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
        Back
      </Text>
    </Pressable>
  );
};

export default ButtonBack;
