import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// import exercises from "@/assets/test-data/workout-exercises.json";
import type { Exercise } from "@/types/exercises";
import useExerciseStore from "@/store/exercisesStore";

import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import Badge from "@/components/Badge/Badge";
import BookmarkIcon from "@/assets/icons/bookmark-outline";
import EllipsisHorizontalIcon from "@/assets/icons/ellipsis-horizontal-outline";
import Button from "@/components/Button/Button";
import PlusIcon from "@/assets/icons/plus-mini-20";
import { SwipeListView } from "react-native-swipe-list-view";
import { Image } from "expo-image";
import XMarkIcon from "@/assets/icons/x-mark-mini";

// TODO: The custom styles for the swiped cards are missing.

const WorkoutExercises = () => {
  const { exercises, deleteExercise } = useExerciseStore();

  const renderItem = ({ item }: { item: any }) => (
    <View className="mb-2 flex-row items-center justify-between bg-gray-100">
      <View className="flex-row items-center justify-start">
        <Image
          source={{ uri: item.gif_path }}
          style={{ width: 68, height: 68 }}
        />
        <View className="ml-2">
          <Text className="font-interSemiBold text-base leading-5">
            {item.name}
          </Text>
          <Text className="font-interRegular text-xs text-gray-400">
            {item.sets_completed} of {item.total_sets} completed sets
          </Text>
        </View>
      </View>
      {item.status === "Completed" ? (
        <Text className="font-interSemiBold text-xs text-indigo-600">
          Completed
        </Text>
      ) : (
        <EllipsisHorizontalIcon fill={"#9CA3AF"} stroke={"#9CA3AF"} />
      )}
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View className="flex-1 flex-row items-center justify-end pl-4">
      <TouchableOpacity
        className="h-full w-[75px] items-center justify-center border-b-8 border-gray-100 bg-red-500"
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <XMarkIcon stroke="#FCFEFE" fill="#FCFEFE" />
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
    <View className="mx-4">
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
      <View className="mb-6">
        <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
          Workout
        </Text>
        <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
          6 exercises added to your workout
        </Text>
      </View>

      <View className="mb-6">
        <SwipeListView
          data={exercises}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableRightSwipe
        />
      </View>

      <View>
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
