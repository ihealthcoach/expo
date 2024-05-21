import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  border?: string;
  onPress?: () => void;
}

const Button = ({
  text,
  textColor = "text-white",
  bgColor,
  onPress,
  iconBefore,
  iconAfter,
  border,
}: ButtonProps) => {
  // const textColor =
  //   bgColor === "bg-gray-900" || bgColor == undefined
  //     ? "text-white"
  //     : "text-black";

  return (
    <View className="mb-4 flex-row overflow-hidden rounded-md">
      {iconBefore && (
        <Pressable
          onPress={onPress}
          className={`flex-1 rounded-md ${bgColor} px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${border}`}
        >
          <View className="flex-row items-center justify-center gap-2">
            <View className="text-white-ih">{iconBefore}</View>
            <Text
              className={`text-center font-interMedium text-base ${textColor}`}
            >
              {text}
            </Text>
          </View>
        </Pressable>
      )}
      {iconAfter && (
        <Pressable
          onPress={onPress}
          className={`flex-1 rounded-md ${bgColor} px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${border}`}
        >
          <View className="flex-row items-center justify-center gap-2">
            <Text
              className={`text-center font-interMedium text-base ${textColor}`}
            >
              {text}
            </Text>
            <View className="text-white-ih">{iconAfter}</View>
          </View>
        </Pressable>
      )}
      {!iconBefore && !iconAfter && (
        <Pressable
          onPress={onPress}
          className={`flex-1 rounded-md ${bgColor} px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${border}`}
        >
          <Text
            className={`text-center font-interMedium text-base ${textColor}`}
          >
            {text}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default Button;
