import { View, Text } from "react-native";
import React, { useState } from "react";

import Button from "@/components/Button";
import RadioBox from "@/components/RadioBox";

const QMainGail = () => {
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
        <Text className="-mt-1 mb-2 font-interExtraBold text-5xl text-primary-900">
          Main goal?
        </Text>
        <Text className="mb-6 font-interMedium text-sm text-primary-700">
          You can always change this later
        </Text>
        <RadioBox
          headline={"Look Muscular & Toned"}
          body={"Muscle size & visibility"}
          name={"1"}
          value={value}
          setValue={setValue}
        />
        <RadioBox
          headline={"Get Stronger, Faster"}
          body={"Lift more weight"}
          name={"2"}
          value={value}
          setValue={setValue}
        />
        <RadioBox
          headline={"Lose Fat"}
          body={"Burn a lot of calories"}
          name={"3"}
          value={value}
          setValue={setValue}
        />
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"fitness"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Back
        </Text>
      </View>
    </View>
  );
};
export default QMainGail;
