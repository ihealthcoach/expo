import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";

import ButtonOnboarding from "@/components/ButtonOnBoarding/ButtonOnboarding";

const GSmealsAndDiet = () => {
  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="flex flex-1 items-center justify-center">
        <View className="mb-24 flex items-center">
          <Text className="mb-2 text-xl font-semibold italic leading-tight text-primary-700">
            Track your
          </Text>
          <Text className="-mt-1 font-interExtraBold text-5xl leading-tight text-primary-900">
            Meals and diet
          </Text>
          <Text className="absolute bottom-0 -m-5 font-interMedium text-sm text-primary-700">
            and get inspiration for new recipes etc.
          </Text>
        </View>
        <View className="absolute bottom-0 w-full px-4 pb-6">
          <ButtonOnboarding text={"Continue"} path={"/progress"} />
          <Text className="mb-4 text-center font-interMedium text-base text-primary-700">
            Already have an account?
            <Text className="font-interBold"> Sign in</Text>{" "}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default GSmealsAndDiet;
