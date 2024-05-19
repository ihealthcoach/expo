import { View, Text, ImageBackground } from "react-native";
import React from "react";
import HeaderExerciseLibrary from "@/components/HeaderExerciseLibrary";
import BadgesExerciseLibrary from "@/components/BadgesExerciseLibrary";
import ExercisesScreen from "@/components/ExercisesScreen/ExercisesScreen";
import Badge from "@/components/Badge/Badge";
import SortIcon from "@/assets/icons/vuesax-sort-linear";

const ExerciseLibrary = () => {
  return (
    <View className="relative flex-1">
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
      <View className="flex-1">
        <ExercisesScreen />
      </View>
      <View className="absolute bottom-8 right-8">
        {/* TODO: Add/fix gap between badge and icon */}
        <Badge className="w-full" isDark text="4" iconBefore={<SortIcon />} />
      </View>
    </View>
  );
};

export default ExerciseLibrary;
