import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import PlusIcon from "@/assets/icons/plus-mini-20";
import Badge from "./Badge/Badge";
import CheckBadgeOutlineIcon from "@/assets/icons/check-badge-outline";
import CheckOutlineIcon from "@/assets/icons/check-outline";

const HeaderExerciseLibrary = () => {
  const router = useRouter();
  return (
    <View className="mb-6 mt-4 flex-row items-center justify-between px-4">
      <Pressable onPress={() => router.back()}>
        <ArrowLeftIcon />
      </Pressable>
      <View className="flex-row items-center">
        <View className="mr-3 flex-row items-center">
          <Text className="mr-1 font-interMedium text-sm text-gray-600">
            View workout
          </Text>
          <ChevronDownIcon />
        </View>
        <Pressable className="mr-3 rounded-full bg-gray-200 p-3">
          <PlusIcon fill={"#111827"} />
        </Pressable>
        <Badge text="Done" isDark iconAfter={<CheckOutlineIcon />} />
      </View>
    </View>
  );
};

export default HeaderExerciseLibrary;
