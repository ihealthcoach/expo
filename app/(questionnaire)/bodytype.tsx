import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire"; // Import the context hook

const QBodytype = () => {
  const { bodytype, setQuestionnaire } = useQuestionnaire(); // Destructure 'bodytype' and 'setQuestionnaire'
  const [value, setValue] = useState(bodytype || "");

  const handleBodyTypeChange = (newValue) => {
    setValue(newValue);
    // Map the radio button names to your bodytype values
    const bodyTypeValue =
      newValue === "1"
        ? "ectomorph"
        : newValue === "2"
        ? "endomorph"
        : newValue === "3"
        ? "mesomorph"
        : "combination";
    setQuestionnaire({ bodytype: bodyTypeValue }); // Update the bodytype in the context
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
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button progress={1} text={"Continue"} path={"/createAccount"} />
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
export default QBodytype;
