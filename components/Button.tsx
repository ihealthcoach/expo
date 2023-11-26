import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

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
  | "/fitness";

const Button: React.FC<ButtonProps> = ({ text, path, progress }) => {
  const { setProgress } = useProgressBar();

  const handlePress = () => {
    if (progress !== undefined) {
      setProgress(progress);
    }
  };

  return (
    <View className="mb-8 flex-row overflow-hidden rounded-md border-primary-700">
      <Link
        onPress={handlePress}
        className="flex-1 rounded-md bg-primary-800 px-6 py-4 font-interMedium text-base text-white hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        href={path as StaticRoutes}
        asChild
      >
        <Text className="text-center">{text}</Text>
      </Link>
    </View>
  );
};

export default Button;
