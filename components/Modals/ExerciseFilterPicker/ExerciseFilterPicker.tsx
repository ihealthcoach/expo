import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import CheckIcon from "@/assets/icons/check-solid";

const sets = [
  { id: 1, label: "1 set" },
  { id: 2, label: "2 sets" },
  { id: 3, label: "3 sets" },
  { id: 4, label: "4 sets" },
  { id: 5, label: "5 sets" },
  { id: 6, label: "6 sets" },
  { id: 7, label: "7 sets" },
  { id: 8, label: "8 sets" },
  { id: 9, label: "9 sets" },
  { id: 10, label: "10 sets" },
  { id: 11, label: "11 sets" },
  { id: 12, label: "12 sets" },
  { id: 13, label: "13 sets" },
  { id: 14, label: "14 sets" },
  { id: 15, label: "15 sets" },
  { id: 16, label: "16 sets" },
  { id: 17, label: "17 sets" },
  { id: 18, label: "18 sets" },
  { id: 19, label: "19 sets" },
  { id: 20, label: "20 sets" },
];

const ExerciseFilterPicker = () => {
  const [selectedSet, setSelectedSet] = useState<number | null>(3); // Set initial selection
  const scrollViewRef = useRef<ScrollView>(null);
  const { height } = Dimensions.get("window");

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const itemHeight = height / 17; // Adjust this value based on your item height and screen size
    const centerIndex = Math.round(offsetY / itemHeight);

    if (sets[centerIndex] && sets[centerIndex].id !== selectedSet) {
      setSelectedSet(sets[centerIndex].id);
    }
  };

  return (
    <View className="flex-1">
      {/* <View className="absolute left-0 right-0 top-1/2 items-center justify-center">
        <CheckIcon />
      </View> */}
      <View className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-200"></View>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="w-full"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: height / 2 }}></View>
        {sets.map((set) => (
          <Pressable
            key={set.id}
            onPress={() => setSelectedSet(set.id)}
            className={`w-full items-center justify-center py-4 ${
              set.id !== sets.length ? "border-b border-b-gray-200" : ""
            }`}
          >
            <Text
              className={`${
                selectedSet === set.id
                  ? "font-interSemiBold text-gray-900"
                  : "font-interRegular text-gray-400"
              }`}
            >
              {set.label}
            </Text>
          </Pressable>
        ))}
        <View style={{ height: height / 2 }}></View>
      </ScrollView>
    </View>
  );
};
export default ExerciseFilterPicker;
