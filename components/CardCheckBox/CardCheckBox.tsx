import { View, Text, Pressable } from "react-native";
import React from "react";
import CheckBox from "@/components/CheckBox/CheckBox";

const Card = ({ headline, body, isChecked, setIsChecked }) => {
  return (
    <Pressable
      onPress={() => setIsChecked(!isChecked)}
      className={
        isChecked
          ? "mx-4 mb-2 flex-row"
          : "mx-4 mb-2 flex-row border-[1px] border-transparent"
      }
    >
      <View
        className={
          isChecked
            ? "box-border flex-1 flex-row items-center justify-between rounded-md border-2 border-primary-600 bg-[#54d9c2] p-4 shadow-sm"
            : "flex-1 flex-row items-center justify-between rounded-md border-[1px] border-primary-600 p-4"
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
        <CheckBox checked={isChecked} />
      </View>
    </Pressable>
  );
};

export default Card;
