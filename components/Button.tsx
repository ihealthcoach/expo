import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

// Contexts
import { useProgressBar } from "@/context/useProgressBar";

// Define the type for the component props
interface ButtonProps {
  text: string;
  path: string;
  progress?: number; // The '?' makes the 'progress' prop optional
}

type StaticRoutes =
  | "/mealsAndDiet"
  | "/progress"
  | "/mainGoal"
  | "/goals"
  | "/workout"
  | "/age"
  | "/gender"
  | "/height"
  | "/weight"
  | "/bodytype"
  | "/fitness"
  | "/continueWithEmail";

const Button: React.FC<ButtonProps> = ({ text, path, progress }) => {
  const { incrementProgress } = useProgressBar();

  const handlePress = () => {
    const incrementValue = progress !== undefined ? progress : 5;
    incrementProgress(incrementValue);
    router.push(path as StaticRoutes);
  };

  return (
    <View className="mb-4 flex-row overflow-hidden rounded-md">
      <Pressable
        onPress={handlePress}
        className="flex-1 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-base text-white">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
