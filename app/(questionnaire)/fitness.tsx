import { View, Text } from "react-native";
import React, { useState } from "react";

import Button from "@/components/Button";
import CardRadioButton from "@/components/CardRadioButton";

const QFitness = () => {
  const [value, setValue] = useState("");

  return (
    <View className="flex flex-1 items-center bg-[#66eed1]">
      <View className="w-full items-center justify-center py-3">
        <Text className="h-5">Progress Bar</Text>
      </View>
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
          name={"1"}
          value={value}
          setValue={setValue}
        />
        <CardRadioButton
          headline={"Not really"}
          body={"I'm intermediate"}
          name={"2"}
          value={value}
          setValue={setValue}
        />
        <CardRadioButton
          headline={"No"}
          body={"I'm advanced, bro"}
          name={"3"}
          value={value}
          setValue={setValue}
        />
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"bodytype"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Back
        </Text>
      </View>
    </View>
  );
};
export default QFitness;
