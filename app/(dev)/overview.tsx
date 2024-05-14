import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

const overview = () => {
  const router = useRouter();
  return (
    <View className="mx-4 flex-1 justify-center">
      <Pressable
        onPress={() => router.push("/(dashboard)/landingpage")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Dashboard
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(workout)/exerciseLibrary")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Workout - Exercise Library
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(dev)/gif")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          GIF w/o background
        </Text>
      </Pressable>
    </View>
  );
};

// router.push("/(workout)/exerciseLibrary");
// router.push("/(dashboard)/landingpage");
// router.push("/(questionnaire)/bodytype");
// router.push("/(getStarted)/mealsAndDiet");

export default overview;
