import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { router } from "expo-router";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";
import { useQuestionnaire } from "@/context/useQuestionnaire";
import ButtonBack from "@/components/ButtonBack";

const QFitness = () => {
  const { level, setQuestionnaire } = useQuestionnaire();
  const [value, setValue] = useState(level || "");

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setQuestionnaire({ level: newValue });
  };

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="mt-6 flex flex-1 items-center">
        <View className="mt-4 flex items-center">
          <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
            Are you new to
          </Text>
          <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
            Fitness?
          </Text>
          <Text className="mb-6 font-interMedium text-sm text-primary-700">
            You can always change this later
          </Text>
          <CardRadioButton
            headline={"Yes"}
            body={"I'm a beginner"}
            name={"beginner"}
            value={value}
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"Not really"}
            body={"I'm intermediate"}
            name={"intermediate"}
            value={value}
            setValue={handleValueChange}
          />
          <CardRadioButton
            headline={"No"}
            body={"I'm advanced, bro"}
            name={"advanced"}
            value={value}
            setValue={handleValueChange}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-12">
          <Button progress={0.625} text={"Continue"} path={"/weight"} />
          <ButtonBack />
        </View>
      </View>
    </ImageBackground>
  );
};
export default QFitness;
