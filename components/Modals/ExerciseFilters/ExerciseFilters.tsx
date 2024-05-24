import { View, Text, Pressable, TextInput } from "react-native";
import React, { useMemo, useRef, useEffect } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import { Link } from "expo-router";
import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass-mini";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";

const ExerciseFilters = ({
  setPanelHandlers,
}: {
  setPanelHandlers: (open: () => void, close: () => void) => void;
}) => {
  const snapPoints = useMemo(() => ["68%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => bottomSheetRef.current?.present();

  const handlersSet = useRef(false);

  // Register the open and close panel handlers with the parent
  useEffect(() => {
    if (!handlersSet.current && setPanelHandlers) {
      setPanelHandlers(handleOpenPanel, handleClosePanel);
      handlersSet.current = true;
    }
  }, [setPanelHandlers]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
      handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
    >
      <View className="mx-4 mt-2 flex-1 items-center">
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
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Exercise type
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    All
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Muscle group
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    Middle Back
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Equipment
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    All
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Force type
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    All
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Mechanics
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    All
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full border-b border-b-gray-200">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Experience
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    Intermediate
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
          <View className="w-full">
            <View className="w-full flex-row justify-between py-4 pl-2">
              <Text className="font-interMedium text-base text-gray-900">
                Exercises added
              </Text>
              <Link href="#" asChild>
                <View className="flex-row items-center gap-3">
                  <Text className="font-interRegular text-base text-gray-400">
                    4
                  </Text>
                  <ChevronRightIcon fill="#111827" width={20} height={20} />
                </View>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default ExerciseFilters;
