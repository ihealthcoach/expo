import { useState } from "react";
import { View } from "react-native";

const RadioButton = ({ checked }) => {
  return checked ? (
    // Checked
    <View className="flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-primary-600 bg-primary-600">
      <View className="h-2 w-2 rounded-full bg-white-ih" />
    </View>
  ) : (
    // Unchecked
    <View className="flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-primary-600" />
  );
};

export default RadioButton;
