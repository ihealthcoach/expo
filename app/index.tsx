import { useEffect } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
// import { Dimensions, Text, View } from "react-native";
import Logo from "@/assets/images/svg/logo";
import { useRouter } from "expo-router";
import ImageBgIH from "@/assets/images/svg/imageBackground";
// import ImageBgIH from "@/assets/images/svg/imageBackground";

export default function Page() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  // const { width, height } = Dimensions.get("window");

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/(getStarted)/mealsAndDiet");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ImageBackground
      className="h-full w-full flex-1"
      source={require("@/assets/images/imageBg.png")}
    >
      <View className="h-full">
        <View className="flex-1 items-center justify-center opacity-100">
          {/* <View className="flex-1 items-center justify-center bg-[#66eed1]"> */}
          <View className="shadow-sm">
            <Logo />
          </View>
          <View className="absolute bottom-0 px-10 pb-12">
            <Text className="mb-2 text-center font-interMedium text-sm text-primary-800">
              Copyright © 2023
              <Text className="font-interBold">
                {" "}
                Intelligent Health Coach ApS
              </Text>{" "}
              All rights reserved
            </Text>
            <Text className="text-center font-interMedium text-xs text-primary-600">
              version 1.1.0
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
