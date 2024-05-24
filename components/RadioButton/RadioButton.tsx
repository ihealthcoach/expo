import React from "react";
import { View, Pressable } from "react-native";
import useRadioButtonStore from "@/store/useRadioButtonStore";

interface RadioButtonProps {
  setName?: string;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ setName }) => {
  const { selectedSet, setSelectedSet } = useRadioButtonStore();

  const isChecked = selectedSet === setName;

  return (
    <Pressable
      onPress={() => setSelectedSet(setName)}
      className="h-6 w-6 items-center justify-center"
    >
      <View
        className={`h-6 w-6 rounded-full border-2 ${isChecked ? "border-gray-900 bg-gray-900" : "border-gray-300 bg-gray-50"}`}
      >
        {isChecked && (
          <View className="mx-auto my-auto h-2.5 w-2.5 rounded-full bg-white"></View>
        )}
      </View>
    </Pressable>
  );
};

export default RadioButton;
