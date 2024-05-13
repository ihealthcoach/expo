import { View, Text } from "react-native";
import React from "react";
import HeaderExerciseLibrary from "@/components/HeaderExerciseLibrary";
import BadgesExerciseLibrary from "@/components/BadgesExerciseLibrary";
import ExercisesScreen from "@/components/ExercisesExerciseLibrary";

const exerciseLibrary = () => {
  return (
    <View>
      <HeaderExerciseLibrary />
      <View className="mx-4 mb-6">
        <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
          Library
        </Text>
        <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
          Add exercises to your workout
        </Text>
      </View>
      <BadgesExerciseLibrary />
      {/* <Text>exerciseLibrary</Text> */}
      <ExercisesScreen />
    </View>
  );
};

export default exerciseLibrary;
