// Next component is 'Workout'

import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire";
import ButtonBack from "@/components/ButtonBack";

const QMainGoal = () => {
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
            name={"tone"}
            value={value}
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"Get Stronger, Faster"}
            body={"Lift more weight"}
            name={"strength"}
            value={value}
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"Lose Fat"}
            body={"Burn a lot of calories"}
            name={"weight-loss"}
            value={value}
            setValue={handleValueChange}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          {/* Continue */}
          <Button progress={0.25} text={"Continue"} path={"/workout"} />
          {/* Back button */}
          <ButtonBack />
        </View>
      </View>
    </ImageBackground>
  );
};
export default QMainGoal;
