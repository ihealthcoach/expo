import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import HeaderExerciseLibrary from "@/components/HeaderExerciseLibrary";
import BadgesExerciseLibrary from "@/components/BadgesExerciseLibrary/BadgesExerciseLibrary";
import ExercisesScreen from "@/components/ExercisesScreen/ExercisesScreen";
import Badge from "@/components/Badge/Badge";
import SortIcon from "@/assets/icons/vuesax-sort-linear";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ExerciseFilters from "@/components/Modals/ExerciseFilters/ExerciseFilters";

const ExerciseLibrary = () => {
  const [openPanel, setOpenPanel] = useState<() => void | null>(null);
  const [, setClosePanel] = useState<() => void | null>(null);

  const handleOpenPanel = () => {
    if (openPanel) {
      openPanel();
    }
  };

  const setPanelHandlers = (open: () => void, close: () => void) => {
    setOpenPanel(() => open);
    setClosePanel(() => close);
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
        <ExerciseFilters setPanelHandlers={setPanelHandlers} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default ExerciseLibrary;
