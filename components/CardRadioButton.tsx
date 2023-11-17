import { View, Text, Pressable } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

const Card = ({ headline, body, name, value, setValue }) => {
  const isChecked = value === name;

  return (
    <Pressable
      onPress={() => setValue(name)}
      className={
        isChecked
          ? "mx-4 mb-2 flex-row"
          : "mx-4 mb-2 flex-row border-[1px] border-transparent"
      }
    >
      <View
        className={
          isChecked
            ? "box-border flex-1 flex-row items-center justify-between rounded-md border-2 border-primary-600 bg-[#54d9c2] p-[3%] shadow-sm"
            : "flex-1 flex-row items-center justify-between rounded-md border-[1px] border-primary-600 p-[3%]"
        }
      >
        <View>
          <Text className="max-w-prose font-interSemiBold text-base text-primary-900">
            {headline}
          </Text>
          {body !== null && (
            <Text className="max-w-[300] font-interRegular text-sm text-primary-900">
              {body}
            </Text>
          )}
        </View>
        <RadioButton checked={isChecked} />
      </View>
    </Pressable>
  );
};

export default Card;
