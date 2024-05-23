import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";

const Overview = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <HeaderWithBackArrow>
        <Text className="font-interBold text-2xl">Workout</Text>
      </HeaderWithBackArrow>
      <View className="mx-4 flex-1 justify-center">
        <Pressable
          onPress={() => router.push("/(workout)/exerciseLibrary")}
          className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          <Text className="text-center font-interMedium text-sm text-white">
            Workout - Exercise Library
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(workout)/exerciseDescription")}
          className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          <Text className="text-center font-interMedium text-sm text-white">
            Workout - Exercise Description
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(workout)/workoutExercises")}
          className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          <Text className="text-center font-interMedium text-sm text-white">
            Workout - Workout exercises
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(workout)/exerciseTracking")}
          className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          <Text className="text-center font-interMedium text-sm text-white">
            Workout - Exercise tracking
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(dev)/workout/modals")}
          className="mb-4 rounded-md bg-primary-800 px-6 py-5 font-interMedium text-base text-white-ih hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          <Text className="text-center font-interMedium text-sm text-white">
            Workout - Modals
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Overview;
