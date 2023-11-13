import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";

const QMainGail = () => {
  const [value, setValue] = useState("");

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="flex flex-1 items-center">
        <View className="w-full items-center justify-center py-3">
          <Text className="h-5">Progress Bar</Text>
        </View>
        <View className="mt-4 flex items-center">
          <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
            What is your
          </Text>
          <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
            Main goal?
          </Text>
          <Text className="mb-6 font-interMedium text-sm text-primary-700">
            You can always change this later
          </Text>
          <CardRadioButton
            headline={"Look Muscular & Toned"}
            body={"Muscle size & visibility"}
            name={"1"}
            value={value}
            setValue={setValue}
          />
          <CardRadioButton
            headline={"Get Stronger, Faster"}
            body={"Lift more weight"}
            name={"2"}
            value={value}
            setValue={setValue}
          />
          <CardRadioButton
            headline={"Lose Fat"}
            body={"Burn a lot of calories"}
            name={"3"}
            value={value}
            setValue={setValue}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button text={"Continue"} path={"workout"} />
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
export default QMainGail;
