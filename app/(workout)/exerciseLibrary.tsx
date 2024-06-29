import { View, Text, Pressable } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import HeaderExerciseLibrary from "@/components/HeaderExerciseLibrary";
import BadgesExerciseLibrary from "@/components/BadgesExerciseLibrary/BadgesExerciseLibrary";
import ExercisesScreen from "@/components/ExercisesScreen/ExercisesScreen";
import Badge from "@/components/Badge/Badge";
import SortIcon from "@/assets/icons/vuesax-sort-linear";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import { TextInput } from "react-native-gesture-handler";
import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass-mini";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import { Link } from "expo-router";

const ExerciseLibrary = () => {
  const [openBackDrop, setOpenBackDrop] = useState<boolean>(false);

  const snapPoints = useMemo(() => ["68%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => {
    bottomSheetRef.current?.close();
    setOpenBackDrop(false);
  };

  const handleOpenPanel = () => {
    bottomSheetRef.current?.present();
    setOpenBackDrop(true);
  };

  return (
    <BottomSheetModalProvider>
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
        <View className="flex-1">
          <ExercisesScreen />
        </View>
        <View className="absolute bottom-8 right-8">
          <Pressable onPress={handleOpenPanel}>
            <Badge
              className="w-full"
              isDark
              text="4"
              iconBefore={<SortIcon />}
            />
          </Pressable>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
        handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
        onDismiss={() => setOpenBackDrop(false)}
        backdropComponent={({ animatedIndex }) => (
          <Pressable
            onPress={handleClosePanel}
            className={`absolute left-0 right-0 top-0 h-screen bg-[#24292f] transition-opacity duration-300 ${openBackDrop ? "opacity-60" : "opacity-0"}`}
          />
        )}
      >
        <View className="z-50 mx-4 mt-2 flex-1 items-center">
          <View className="w-full flex-1 items-center">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Exercise filters
              </Text>
              <Pressable
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </Pressable>
            </View>

            <View className="mb-4 w-full flex-row items-center rounded-lg bg-gray-100">
              <TextInput
                placeholder="Search 518 exercises ..."
                className="flex-1 rounded-lg bg-gray-100 px-4 py-4"
              />
              <View className="mr-4">
                <MagnifyingGlassIcon fill="#D1D5DB" width={20} height={20} />
              </View>
            </View>
            {[
              "Exercise type",
              "Muscle group",
              "Equipment",
              "Force type",
              "Mechanics",
              "Experience",
              "Exercises added",
            ].map((label, index) => (
              <View key={index} className="w-full border-b border-b-gray-200">
                <View className="w-full flex-row justify-between py-4 pl-2">
                  <Text className="font-interMedium text-base text-gray-900">
                    {label}
                  </Text>
                  <Link href="#" asChild>
                    <View className="flex-row items-center gap-3">
                      <Text className="font-interRegular text-base text-gray-400">
                        {label === "Exercises added" ? "4" : "All"}
                      </Text>
                      <ChevronRightIcon fill="#111827" width={20} height={20} />
                    </View>
                  </Link>
                </View>
              </View>
            ))}
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ExerciseLibrary;
