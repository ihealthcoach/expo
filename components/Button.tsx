import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const Button = ({ text, bgColor, onPress, icon }: ButtonProps) => {
  const textColor = bgColor === "bg-gray-900" || bgColor == undefined  ? "text-white" : "text-black";

  return (
    <View className="mb-4 flex-row overflow-hidden rounded-md">
      <Pressable
        onPress={onPress}
        className={`flex-1 rounded-md ${bgColor} px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700`}
      >
        <View className="flex-row items-center justify-center gap-2">
          <Text className={`text-center font-interMedium text-base ${textColor}`}>
            {text}
          </Text>
          <View className="text-white">{icon}</View>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
