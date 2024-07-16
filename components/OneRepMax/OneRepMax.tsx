import XMarkIcon from "@/assets/icons/x-mark-mini";
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
import { Image } from "expo-image";

type OneRepMaxProps = {
  handleClosePanel: () => void;
};

export const OneRepMax = ({ handleClosePanel }: OneRepMaxProps) => {
  return (
    <View className="mx-4 mt-2 flex-1">
      <View className="mb-6 w-full flex-row items-center justify-between">
        <Text className="font-interBold text-2xl text-gray-900">
          One Rep Max
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
          Calculated One Rep Max <Text className="text-gray-900">85.9 kg</Text>
        </Text>
        <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
          January 21, 2024
        </Text>
      </View>
      <Image
        source={require("@/assets/test-data/graph_exercise_one_rep_max.png")}
        className="mb-6 h-[200px] w-full rounded-lg"
      />
      {ExerciseOneRepMaxData.map((item, index) => (
        <View
          key={index}
          className={`w-full items-center px-[6px] py-2 ${
            index % 2 === 0 ? "" : "bg-gray-100"
          }`}
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="mb-[2px] font-interRegular text-sm leading-[17.5px] text-gray-600">
              {item.date}
            </Text>
            <Text className="max-w-xs font-interRegular text-sm leading-[17.5px] text-gray-600">
              {item.value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const ExerciseOneRepMaxData = [
  {
    date: "January 21, 2024",
    value: 85.9,
  },
  {
    date: "January 18, 2024",
    value: 56.25,
  },
  {
    date: "January 15, 2024",
    value: 33,
  },
  {
    date: "January 10, 2024",
    value: 42.1,
  },
  {
    date: "January 04, 2024",
    value: 31.7,
  },
  {
    date: "December 31, 2023",
    value: 21,
  },
];
