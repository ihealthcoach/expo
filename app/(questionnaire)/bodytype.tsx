import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { PanGestureHandler } from "react-native-gesture-handler";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire";
import ButtonBack from "@/components/ButtonBack";
import { useProgressBar } from "@/context/useProgressBar";
import Bottom from "@/components/Bottom";

const QBodytype = () => {
  const { bodytype, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(bodytype || "");

  const router = useRouter();
  const { decrementProgress } = useProgressBar();

  const handleBodyTypeChange = (newValue) => {
    setValue(newValue);
    const bodyTypeValue =
      newValue === "1"
        ? "ectomorph"
        : newValue === "2"
        ? "endomorph"
        : newValue === "3"
        ? "mesomorph"
        : "combination";
    setQuestionnaire({ bodytype: bodyTypeValue });
  };

  const onGestureEvent = ({ nativeEvent }) => {
    if (nativeEvent.translationX > 0) {
      decrementProgress(12.5);
      router.back();
    }
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        activeOffsetX={[0, 20]}
        failOffsetY={[-5, 5]}
      >
        <View className="mt-6 flex flex-1 items-center">
          <View className="mt-4 flex items-center">
            <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
              What is your
            </Text>
            <Text className="-mt-1 mb-4 font-interExtraBold text-5xl text-primary-900">
              Bodytype?
            </Text>
            <CardRadioButton
              headline={"Ectomorph"}
              body={
                "Lean and slender body type with a fast metabolism and difficulty gaining weight or muscle mass."
              }
              name={"1"}
              value={value}
              setValue={handleBodyTypeChange}
            />
            <CardRadioButton
              headline={"Endomorph"}
              body={
                "Higher body fat percentage, rounder shape, slower metabolism, and a tendency to gain weight easily."
              }
              name={"2"}
              value={value}
              setValue={handleBodyTypeChange}
            />
            <CardRadioButton
              headline={"Mesomorph"}
              body={
                "Athletic and well-proportioned body type, with a moderate metabolism, easy muscle building, and fat burning."
              }
              name={"3"}
              value={value}
              setValue={handleBodyTypeChange}
            />
            <CardRadioButton
              headline={"Combination type"}
              body={
                "Individuals who display a combination of multiple body types"
              }
              name={"4"}
              value={value}
              setValue={handleBodyTypeChange}
            />
          </View>
          <Bottom path="/createAccount" />
        </View>
      </PanGestureHandler>
    </ImageBackground>
  );
};
export default QBodytype;
