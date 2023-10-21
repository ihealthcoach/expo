import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Button from "../../components/Button";

const GSmealsAndDiet = () => {
  const router = useRouter();

  return (
    <View className="flex flex-1 items-center justify-center bg-[#66eed1]">
      <View className="flex items-center">
        <Text className="mb-2 text-xl italic leading-tight text-primary-700">
          Track your
        </Text>
        <Text className="-mt-1 font-interExtraBold text-5xl leading-tight text-primary-900">
          Meals and diet
        </Text>
        <Text className="absolute bottom-0 -m-5 font-interMedium text-sm text-primary-700">
          and get inspiration for new recipes etc.
        </Text>
      </View>
      <View className="absolute bottom-0 w-full px-4 pb-12">
        <Button text={"Continue"} path={"/(getStarted)/progress"} />
        <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
          Already have an account?
          <Text className="font-interBold"> Sign in</Text>{" "}
        </Text>
      </View>
    </View>
  );
};
export default GSmealsAndDiet;
