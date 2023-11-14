import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";

const QFitness = () => {
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
            setValue={setValue}
          />
          <CardRadioButton
            headline={"Endomorph"}
            body={
              "Higher body fat percentage, rounder shape, slower metabolism, and a tendency to gain weight easily."
            }
            name={"2"}
            value={value}
            setValue={setValue}
          />
          <CardRadioButton
            headline={"Mesomorph"}
            body={
              "Athletic and well-proportioned body type, with a moderate metabolism, easy muscle building, and fat burning."
            }
            name={"3"}
            value={value}
            setValue={setValue}
          />
          <CardRadioButton
            headline={"Combination type"}
            body={
              "Individuals who display a combination of multiple body types"
            }
            name={"4"}
            value={value}
            setValue={setValue}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button text={"Continue"} path={"mealsAndDiet"} />
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
export default QFitness;
