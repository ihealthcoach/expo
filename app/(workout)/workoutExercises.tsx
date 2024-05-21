import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// import exercises from "@/assets/test-data/workout-exercises.json";
import type { Exercise } from "@/types/exercises";
import useExerciseStore from "@/store/exercises";

import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import Badge from "@/components/Badge/Badge";
import BookmarkIcon from "@/assets/icons/bookmark-outline";
import EllipsisHorizontalIcon from "@/assets/icons/ellipsis-horizontal-outline";
import Button from "@/components/Button/Button";
import PlusIcon from "@/assets/icons/plus-mini-20";
import { SwipeListView } from "react-native-swipe-list-view";
import { Image } from "expo-image";

const WorkoutExercises = () => {
  const { exercises, deleteExercise } = useExerciseStore();

  const renderItem = ({ item }: { item: Exercise }) => (
    console.log(item.gif_path),
    (
      <View className="flex justify-center border border-gray-300 bg-white">
        <Image
          source={{ uri: item.gif_path }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{item.name}</Text>
      </View>
    )
  );

  const renderHiddenItem = (data, rowMap) => (
    <View className="flex-1 flex-row items-center justify-end bg-red-500 pl-4">
      <TouchableOpacity
        className="w-12 items-center justify-center bg-red-500"
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text className="text-white">X</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteRow = (rowMap: any, rowKey: number) => {
    closeRow(rowMap, rowKey);
    deleteExercise(rowKey);
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <View>
      <HeaderWithBackArrow>
        <View className="flex-row items-center">
          <View className="mr-3">
            <Badge
              text="Save as template"
              iconAfter={<BookmarkIcon stroke="#FCFEFE" />}
              isDark
            />
          </View>
          <EllipsisHorizontalIcon />
        </View>
      </HeaderWithBackArrow>
      <View className="mx-4">
        <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
          Workout
        </Text>
        <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
          6 exercises added to your workout
        </Text>
      </View>

      <View className="mx-4">
        <SwipeListView
          data={exercises}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-50}
          disableRightSwipe
        />
      </View>

      <View className="mx-4">
        <Button text="Start workout" bgColor="bg-indigo-600" />
        <Button
          text="Add exercise"
          bgColor="bg-gray-50"
          textColor="text-gray-700"
          border="border-[1px] border-gray-200"
          iconBefore={<PlusIcon stroke="#374151" />}
        />
      </View>
    </View>
  );
};

export default WorkoutExercises;
