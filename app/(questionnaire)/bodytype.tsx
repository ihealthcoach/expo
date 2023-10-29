import { View, Text } from "react-native";
import React, { useState } from "react";

import Button from "@/components/Button";
import RadioBox from "@/components/RadioBox";

const QFitness = () => {
  const [value, setValue] = useState("");

  return (
    <View className="flex flex-1 items-center bg-[#66eed1]">
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
        <RadioBox
          headline={"Ectomorph"}
          body={
            "Lean and slender body type with a fast metabolism and difficulty gaining weight or muscle mass."
          }
          name={"1"}
          value={value}
          setValue={setValue}
        />
        <RadioBox
          headline={"Endomorph"}
          body={
            "Higher body fat percentage, rounder shape, slower metabolism, and a tendency to gain weight easily."
          }
          name={"2"}
          value={value}
          setValue={setValue}
        />
        <RadioBox
          headline={"Mesomorph"}
          body={
            "Athletic and well-proportioned body type, with a moderate metabolism, easy muscle building, and fat burning."
          }
          name={"3"}
          value={value}
          setValue={setValue}
        />
        <RadioBox
          headline={"Combination type"}
          body={"Individuals who display a combination of multiple body types"}
          name={"4"}
          value={value}
          setValue={setValue}
        />
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"mealsAndDiet"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Back
        </Text>
      </View>
    </View>
  );
};
export default QFitness;
