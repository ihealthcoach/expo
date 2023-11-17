import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";

// Expo
import { router } from "expo-router";

// Components
import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import ProgressBar from "@/components/ProgressBar";

const QGender = () => {
  const [value, setValue] = useState("");

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="flex-1 items-center justify-center">
        {/* <View className="absolute top-0 w-full items-start px-4 py-3">
          <ProgressBar /> */}
        {/* </View> */}
        <View className="mb-36 w-full">
          <View className="items-center">
            <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
              What is your
            </Text>
            <Text className="-mt-1 mb-6 font-interExtraBold text-5xl leading-tight text-primary-900">
              Gender?
            </Text>
            {/* <RadioButton /> */}
            <CardRadioButton
              headline={"Male"}
              body={null}
              name={"male"}
              value={value}
              setValue={setValue}
            />
            <CardRadioButton
              headline={"Female"}
              body={null}
              name={"female"}
              value={value}
              setValue={setValue}
            />
            <CardRadioButton
              headline={"I'd rather not say"}
              body={null}
              name={"unknown"}
              value={value}
              setValue={setValue}
            />
          </View>
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button progress={0.25} text={"Continue"} path={"/mainGoal"} />
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
export default QGender;
