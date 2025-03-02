import { useEffect } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  // const { width, height } = Dimensions.get("window");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Temporarily changed the route to /dashboard/landingpage
      // router.push("/(workout)/exerciseLibrary");
      // router.push("/(dashboard)/landingpage");
      // router.push("/(questionnaire)/bodytype");
      // router.push("/(getStarted)/mealsAndDiet");
      router.push("/(dev)/overview");
    }, 30);
    // }, 3000);
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
          <View className="">
            <Svg className="shadow-sm" width={117} height={132} fill="none">
              <G filter="url(#a)">
                <Path
                  fill="#FCFEFE"
                  fillRule="evenodd"
                  d="M50.254 106.79V23.21l8.042-4.643 8.043 4.644v27.7L82.423 60.2V32.497l16.085 9.287v46.432l-16.085 9.287V78.772L66.34 69.485v37.305l-8.043 4.643-8.042-4.643ZM34.169 72.581v43.495l20.877 12.053a6.502 6.502 0 0 0 6.5 0l49.797-28.75a6.502 6.502 0 0 0 3.25-5.63V36.25a6.502 6.502 0 0 0-3.25-5.63L61.546 1.87a6.502 6.502 0 0 0-6.5 0L5.25 30.62A6.5 6.5 0 0 0 2 36.25v57.5a6.5 6.5 0 0 0 3.25 5.63l12.834 7.41V81.868l16.085-9.286Zm0-40.084V54.01l-16.084 9.286V41.784l16.084-9.287Z"
                  clipRule="evenodd"
                />
              </G>
            </Svg>
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