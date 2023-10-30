import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

import Button from "@/components/Button";
import Toggle from "@/components/Toggle";

const QHeight = () => {
  const [value, setValue] = useState("");

  return (
    <View className="flex-1 items-center justify-center bg-[#66eed1]">
      <View className="absolute top-0 w-full items-center py-3">
        <Text className="h-5">Progress Bar</Text>
      </View>
      <View className="mb-36 w-full">
        <View className="items-center">
          <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
            Tell us your
          </Text>
          <Text className="-mt-1 mb-10 font-interExtraBold text-5xl text-primary-900">
            Height?
          </Text>
          <View className="mb-9  flex items-center justify-center">
            {value === "" && (
              <Text className="absolute ml-2 font-interRegular text-3xl leading-tight text-[#5ad9c0]">
                Your height in cm
              </Text>
            )}
            <TextInput
              className="w-full text-center font-interRegular text-3xl leading-tight text-primary-800"
              onChangeText={(numberString) => setValue(numberString)}
              value={value}
              placeholderTextColor={"#5ad9c0"}
              selectionColor={"#134E48"}
              keyboardType="numeric"
            />
          </View>
          <Toggle valueLeft={"Centimeters"} valueRight={"Inches"} />
        </View>
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"age"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Back
        </Text>
      </View>
    </View>
  );
};
export default QHeight;
