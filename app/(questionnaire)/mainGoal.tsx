// Next component is 'Workout'

import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire";

const QMainGoal = () => {
  const questionnaireContext = useQuestionnaire();
  const { goal, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(goal || "");

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ goal: newValue });
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="mt-6 flex flex-1 items-center">
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
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"Get Stronger, Faster"}
            body={"Lift more weight"}
            name={"2"}
            value={value}
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"Lose Fat"}
            body={"Burn a lot of calories"}
            name={"3"}
            value={value}
            setValue={handleValueChange}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button progress={0.375} text={"Continue"} path={"/workout"} />
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
export default QMainGoal;
