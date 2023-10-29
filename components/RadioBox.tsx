import { View, Text, Pressable } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

const RadioBox = ({ headline, body, name, value, setValue }) => {
  return (
    // Checked
    value === name ? (
      <Pressable onPress={() => setValue(name)} className="mx-4 mb-2 flex-row">
        <View className=" box-border flex-1 flex-row items-center justify-between rounded-md border-2 border-primary-600 bg-[#54d9c2] p-4 shadow-sm">
          <View>
            <Text className="max-w-prose font-interSemiBold text-base text-primary-900">
              {headline}
            </Text>
            <Text className="max-w-[300] font-interRegular text-sm text-primary-900">
              {body}
            </Text>
          </View>
          <RadioButton checked={value === name} />
        </View>
      </Pressable>
    ) : (
      // Unchecked
      <Pressable
        onPress={() => setValue(name)}
        className="mx-4 mb-2 flex-row border-[1px] border-transparent"
      >
        <View className="flex-1 flex-row items-center justify-between rounded-md border-[1px] border-primary-600 p-4">
          <View>
            <Text className="max-w-prose font-interSemiBold text-base text-primary-900">
              {headline}
            </Text>
            <Text className="max-w-[300] font-interRegular text-sm text-primary-900">
              {body}
            </Text>
          </View>
          <RadioButton checked={false} />
        </View>
      </Pressable>
    )
  );
};

export default RadioBox;
