import { View, Text, Pressable } from "react-native";
import React, { useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import Button from "@/components/Button/Button";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import InformationCircleIcon from "@/assets/icons/information-circle-outline";
import ActivityOutlineIcon from "@/assets/icons/activity-outline";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import ReorderIcon from "@/assets/icons/reorder-exercises";
import TimerIcon from "@/assets/icons/timer-outline";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import NoteAddIcon from "@/assets/icons/vuesax-note-add-outline";
import LogoutIcon from "@/assets/icons/logout-outline";
import { Image } from "expo-image";

const ExerciseDescription = () => {
  const snapPoints = useMemo(() => ["90%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <View className="flex-1">
      <View className="mx-4">
        <Button
          text="Open modal"
          bgColor="bg-indigo-600"
          onPress={handleOpenPanel}
        />
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
          handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
        >
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Exercise guide
              </Text>
              <Pressable
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </Pressable>
            </View>
            <View className="mb-6">
              <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
                Arnold Press
              </Text>
            </View>

            <View className="mb-6 flex-1 flex-row">
              <Image
                source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
                className="h-full w-1/2"
              />
              <View className="w-1/2 py-6">
                <Image
                  contentFit="contain"
                  source={require("@/assets/test-data/chest.png")}
                  className="h-full w-full"
                />
              </View>
            </View>
            <View className="mb-6">
              <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
                How to
              </Text>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">1.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Start from the chest with your palms facing towards you.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">2.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Twist your forearms outwards as you move the weight upwards.
                  The end position should be the same as with a normal shoulder
                  press.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">3.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Slowly lower the weights back to the starting position,
                  twisting your forearms back to facing you.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">4.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Arnold presses have been accused of being harsh on shoulders
                  and rotator cuffs, so we would advise to start with low
                  weights for practicing the technique.
                </Text>
              </View>
            </View>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default ExerciseDescription;
