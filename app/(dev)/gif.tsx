import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";

const Gif = () => {
  const router = useRouter();
  return (
    <View className="flex">
      <View className="mx-4 py-2">
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>
      </View>
      <View className="flex items-center justify-between">
        <Text className="mb-4 font-interMedium text-lg">
          With no background
        </Text>
        <Image
          className="mb-8 h-64 w-64"
          source={require("@/assets/test-data/output.gif")}
        />
        <Text className="mb-4 font-interMedium text-lg">With gray-100</Text>
        <Image
          className="h-64 w-64 bg-gray-100"
          source={require("@/assets/test-data/output.gif")}
        />
      </View>
    </View>
  );
};

export default Gif;
