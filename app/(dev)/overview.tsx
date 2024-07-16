import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

const overview = () => {
  const router = useRouter();
  return (
    <View className="mx-4 h-full flex-1 justify-center">
      <Pressable
        onPress={() => router.push("/(dashboard)/landingpage")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Dashboard
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(profile)/(settings)/account")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Profile - screens
        </Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push("/(workout-history)/choose-workout/choose-workout")
        }
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Workout history - Choose workout
        </Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push("/(workout-history)/workout-history/workout-history")
        }
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Workout history - Workout history
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(dev)/workout/overview")}
        className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        <Text className="text-center font-interMedium text-sm text-white">
          Workout - screens
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

export default overview;
