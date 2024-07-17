import { View, Text, Pressable } from "react-native";
import React, { useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import Button from "@/components/Button/Button";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import RadioButton from "@/components/RadioButton/RadioButton";

const ExerciseSetType = () => {
  // const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const sets = [
    {
      id: 1,
      name: "Standard set",
      description:
        "A workout set is a fixed number of exercise repetitions with rest",
    },
    {
      id: 2,
      name: "Drop set",
      description:
        "Decreasing weight resistance in one exercise set for muscle fatigue",
    },
    {
      id: 3,
      name: "Negative set",
      description:
        "Eccentric muscle phase, controlled lengthening during exercise set",
    },
    {
      id: 4,
      name: "Rest-pause set",
      description: "Short rests in a set for maximum reps and intensity",
    },
    {
      id: 5,
      name: "Warm up set",
      description: "Warm up sets will be excluded from statistics",
    },
  ];

  const snapPoints = useMemo(() => ["85%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => {
    bottomSheetRef.current?.present();
  };

  // const handlePress = (option: number) => {
  //   setSelectedOption(option);
  // };

  return (
    <View className="flex-1">
      {/* TODO: Check if -mx-4 is needed here */}
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
          <View className="mx-4 mt-2 flex-1 items-center">
            <View className="w-full flex-1 items-center">
              <View className="mb-6 w-full flex-row items-center justify-between">
                <Text className="font-interBold text-2xl text-gray-900">
                  Select set type
                </Text>
                <Pressable
                  onPress={handleClosePanel}
                  className="shrink rounded-full bg-gray-100 p-2"
                >
                  <XMarkIcon fill="#111827" width={24} height={24} />
                </Pressable>
              </View>

              {sets.map((set, index) => (
                <View
                  key={set.id}
                  className={`w-full flex-row items-center justify-between py-4 ${
                    index !== sets.length - 1
                      ? "border-b border-b-gray-200"
                      : ""
                  }`}
                >
                  <View>
                    <Text className="mb-[2px] font-interSemiBold text-base leading-5 text-gray-900">
                      {set.name}
                    </Text>
                    <Text className="max-w-xs font-interRegular text-sm leading-[17.5px] text-gray-400">
                      {set.description}
                    </Text>
                  </View>
                  {/* <View>
                    <ChevronRightIcon fill="#9CA3AF" width={20} height={20} />
                  </View> */}
                  <RadioButton setName={set.name} />
                </View>
              ))}
            </View>
            <Button
              text="Save set type"
              bgColor="bg-indigo-600"
              onPress={handleClosePanel}
            />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default ExerciseSetType;
