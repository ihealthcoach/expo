import XMarkIcon from "@/assets/icons/x-mark-mini";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  InputAccessoryView,
  Keyboard,
} from "react-native";

type ExercisePreviousStatsProps = {
  handleClosePanel: () => void;
};
export const ExercisePreviousStats = ({
  handleClosePanel,
}: ExercisePreviousStatsProps) => {
  return (
    <View className="mx-4 mt-2 flex-1">
      <View className="mb-6 w-full flex-row items-center justify-between">
        <Text className="font-interBold text-2xl text-gray-900">
          Previous stats
        </Text>
        <TouchableOpacity
          onPress={handleClosePanel}
          className="shrink rounded-full bg-gray-100 p-2"
        >
          <XMarkIcon fill="#111827" width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View className="mb-6">
        <Text className="mb-1 font-interBold text-xl leading-[30px] text-indigo-600">
          Barbell Curl
        </Text>
        <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
          5 sets I February 2, 2024 I 08:55
        </Text>
      </View>
      {/* TODO: Add horizontal scroll view here */}
      <View className="-mx-4 mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {exercisePreviousStatsActiveDates.map((date) => (
            <View
              key={date.id}
              className="flex items-center justify-center gap-1"
            >
              <View className="flex items-center gap-2">
                <View
                  className={`h-[50px] w-[50px] items-center justify-center rounded-full ${date.day === "Today" ? "bg-indigo-600" : "bg-gray-100"}`}
                >
                  <Text
                    className={`font-interMedium text-base ${date.day === "Today" ? "text-white-ih" : "text-gray-400"}`}
                  >
                    {date.date}
                  </Text>
                </View>
                <Text
                  className={`font-interRegular text-xs ${date.day === "Today" ? "text-indigo-600" : "text-gray-400"}`}
                >
                  {date.day.toUpperCase()}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const exercisePreviousStatsActiveDates = [
  {
    id: 1,
    date: "10",
    day: "Wed",
  },
  {
    id: 2,
    date: "15",
    day: "Mon",
  },
  {
    id: 3,
    date: "16",
    day: "Tue",
  },
  {
    id: 4,
    date: "18",
    day: "Thu",
  },
  {
    id: 5,
    date: "26",
    day: "Fri",
  },
  {
    id: 6,
    date: "1",
    day: "Thu",
  },
  {
    id: 7,
    date: "2",
    day: "Today",
  },
];
