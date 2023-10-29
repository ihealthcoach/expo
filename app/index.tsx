import { useEffect } from "react";
import { Text, View } from "react-native";
import Logo from "@/assets/images/svg/logo";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // console.log("timeout");
      router.push("/(getStarted)/mealsAndDiet");
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-[#66eed1]">
      <View className="shadow-sm">
        <Logo />
      </View>
      <View className="absolute bottom-0 px-10 pb-12 ">
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
  );
}
