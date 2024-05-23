import { View, Text, Pressable } from "react-native";
import React, { useMemo, useRef } from "react";
import {
  BottomSheetBackdrop,
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

const data = [
  {
    set_number: 1,
    type: "Standard set",
    weight: 41.3,
    weight_unit: "kg",
    reps: 20,
  },
  {
    set_number: 2,
    type: "Standard set",
    weight: 61.3,
    weight_unit: "kg",
    reps: 12,
  },
  {
    set_number: 3,
    type: "Standard set",
    weight: 76.3,
    weight_unit: "kg",
    reps: 8,
  },
  {
    set_number: 4,
    type: "Standard set",
    weight: 76.3,
    weight_unit: "kg",
    reps: 6,
  },
  {
    set_number: 5,
    type: "Standard set",
    weight: 76.3,
    weight_unit: "kg",
    reps: 5,
  },
];

const ExercisePreviousStats = () => {
  const snapPoints = useMemo(() => ["80%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View>
        <View className="mx-4">
          <Button
            text="Open modal"
            bgColor="bg-indigo-600"
            onPress={handleOpenPanel}
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              enableTouchThrough={false}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              style={[{ backgroundColor: "rgba(36, 41, 47, 0.60)" }]}
            />
          )}
        >
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Previous stats
              </Text>
              <Pressable
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </Pressable>
            </View>
            <View className="mb-6">
              <Text className="mb-1 font-interBold text-xl leading-[30px] text-indigo-600">
                Arnold Press
              </Text>
              <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
                5 sets I February 2, 2024 I 08:55
              </Text>
            </View>

            {/* TODO: Add horizontal scroll view here */}
            <View className="mb-6 h-16 items-center justify-center">
              <Text>Horizontal ScrollView</Text>
            </View>

            <View className="mb-6">
              {/* TODO: Add padding right or width to match Figma */}
              {data.map((item, index) => (
                <View
                  className={`border-b border-gray-200 py-2 ${index !== data.length - 1 ? "" : "border-b-0"}`}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex justify-between">
                      <Text className="font-interMedium text-lg text-gray-900">
                        {item.set_number.toString().padStart(2, "0")}
                      </Text>
                      <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                        {item.type}
                      </Text>
                    </View>
                    <View className="flex-row gap-4">
                      <View className="flex items-center">
                        <Text className="font-interMedium text-lg text-gray-900">
                          {item.weight}
                        </Text>
                        <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                          {item.weight_unit}
                        </Text>
                      </View>
                      <View>
                        <Text className="mt-[6px] font-interSemiBold text-sm leading-[17.5px] text-gray-400">
                          x
                        </Text>
                      </View>
                      <View className="flex items-center">
                        <Text className="font-interMedium text-lg text-gray-900">
                          {item.reps}
                        </Text>
                        <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                          reps
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
              {/* }
              <View>
                <Text className="mb-1 font-interBold text-xl leading-[30px] text-gray-900">
                  
                </Text>
              </View> */}
              {/* <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
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
              </View> */}
            </View>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default ExercisePreviousStats;
