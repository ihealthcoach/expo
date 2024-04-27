import { View, Text } from "react-native";
import React from "react";
import PlusIcon from "@/assets/icons/plus-mini-20";

const AddWidget = () => {
  return (
    <View className="mb-12 flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
      <View className="flex-row items-center justify-center gap-[6px]">
        <PlusIcon />
        <Text className="font-interMedium text-gray-400">add widget</Text>
      </View>
    </View>
  );
};

export default AddWidget;
