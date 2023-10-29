import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Button = ({ text, path }) => {
  return (
    <View className="mb-8 flex-row border-primary-700">
      <Link
        className="flex-1 rounded-md bg-primary-800 px-6 py-4 font-interMedium text-base text-white hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        href={path}
        asChild
      >
        <Text className="text-center">{text}</Text>
      </Link>
    </View>
  );
};

export default Button;
