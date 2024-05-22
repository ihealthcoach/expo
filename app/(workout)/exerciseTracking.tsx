import { View, Text } from "react-native";
import React from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import EllipsisHorizontalIcon from "@/assets/icons/ellipsis-horizontal-outline";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import PlusIcon from "@/assets/icons/plus-mini-20";
import InformationCircleIcon from "@/assets/icons/information-circle-outline";
import ActivityOutlineIcon from "@/assets/icons/activity-outline";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import NoteAddIcon from "@/assets/icons/vuesax-note-add-outline";
import Note2Outline from "@/assets/icons/NoteTwoOutline";
import ActivityOutlineVuesax from "@/assets/icons/ActivityOutlineVuesax";
import type { Set, ExerciseTrackingStore } from "@/types/exercise-tracking";
import useExerciseTrackingStore from "@/store/exerciseTrackingStore";
import CheckMiniIcon from "@/assets/icons/check-mini";

const ExerciseTracking = () => {
  const { sets, addSet, deleteSet, updateSetCompletion } =
    useExerciseTrackingStore();
  return (
    <View className="flex-1">
      <HeaderWithBackArrow>
        <Text className="font-interRegular text-base text-gray-400">
          Exercise{" "}
          <Text className="font-interMedium text-gray-900">1 of 6</Text>
        </Text>
        <EllipsisHorizontalIcon />
      </HeaderWithBackArrow>
      <View className="mx-4 mb-12">
        <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
          Arnold press
        </Text>
        <View className="mb-2 flex-row items-center gap-2">
          <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
            4 of 5 sets completed
          </Text>
          <View className="rounded-full bg-gray-900 px-4 py-1">
            <Text className="font-interMedium text-sm leading-[17.5px] text-white-ih">
              Superset
            </Text>
          </View>
          {/* <Badge text="Superset" isDark /> */}
        </View>
        <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
          Exercise note ...
        </Text>
      </View>

      {/* Sets */}
      {sets.map((set, index) => (
        <View
          key={set.id}
          className={`mx-4 mb-4 flex-row justify-between bg-gray-100 pb-[10px] ${
            index !== sets.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <View className="flex w-1/3 items-start justify-between">
            <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
              {set.set_number.toString().padStart(2, "0")}
            </Text>
            <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
              {set.type}
            </Text>
          </View>

          {/* TODO: Fix missing centering when set.weight is more than two digits */}
          {/* SOLUTION (MAYBE): Have three columns, each with a mapping */}
          <View className="flex-row items-baseline gap-4">
            <View className="items-center">
              <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
                {set.weight}
              </Text>
              <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
                {set.weight_unit}
              </Text>
            </View>
            <Text className="text-ms self-center font-interSemiBold leading-[17.5px] text-gray-400">
              x
            </Text>
            <View className="items-center justify-center">
              <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
                {set.reps}
              </Text>
              <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
                reps
              </Text>
            </View>
          </View>
          <View className="w-1/5 items-end self-center">
            {set.completed ? (
              <CheckMiniIcon />
            ) : (
              <View className="flex-row items-center justify-between">
                <View className="rounded-full border border-gray-200 px-3 py-[6px]">
                  <Text className="font-interMedium text-xs leading-[15px] text-gray-400">
                    RPE
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      ))}

      <View className="mx-4">
        <Button
          text="Add set"
          bgColor="bg-gray-50"
          textColor="text-gray-700"
          border="border-[1px] border-gray-200"
          iconAfter={<PlusIcon stroke="#374151" />}
        />
      </View>
      <View className="flex-1 justify-end">
        <View className="mx-9 flex-row justify-around rounded-full bg-gray-900 px-6 py-3">
          <View className="items-center justify-center gap-2">
            <InformationCircleIcon stroke={"#FCFEFE"} />
            <Text className="text-[9px] text-white-ih">Exercise guide</Text>
          </View>
          <View className="items-center justify-center gap-2">
            <ActivityOutlineVuesax />
            <Text className="text-[9px] text-white-ih">Previous stats</Text>
          </View>
          <View className="items-center justify-center gap-2">
            <Chart2Icon />
            <Text className="text-[9px] text-white-ih">One Rep Max</Text>
          </View>
          <View className="items-center justify-center gap-2">
            {/* BUG: SVG wasn't exported properly (from Figma) */}
            <Note2Outline fill={"#FCFEFE"} />
            <Text className="text-[9px] text-white-ih">Notes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExerciseTracking;
