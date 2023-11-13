import React, { useState } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";

const QHeight = () => {
  const [value, setValue] = useState("");

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="flex-1 items-center justify-center">
        <View className="absolute top-0 w-full items-center py-3">
          <Text className="h-5">Progress Bar</Text>
        </View>
        <View className="mb-36 w-full">
          <View className="items-center">
            <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
              What is your
            </Text>
            <Text className="-mt-1 mb-10 font-interExtraBold text-5xl text-primary-900">
              Age?
            </Text>
            <View className="flex items-center justify-center">
              {value === "" && (
                <Text className="absolute ml-2 font-interRegular text-3xl leading-tight text-[#5ad9c0]">
                  Age
                </Text>
              )}
              <TextInput
                className="w-full text-center font-interRegular text-3xl leading-tight text-primary-800"
                autoFocus={true}
                onChangeText={(numberString) => setValue(numberString)}
                value={value}
                placeholderTextColor={"#5ad9c0"}
                selectionColor={"#134E48"}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button text={"Continue"} path={"bodytype"} />
          <Text
            onPress={() => router.back()}
            className="mb-4 text-center font-interMedium text-base text-primary-700"
          >
            Back
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default QHeight;
