import ActivityOutlineIcon from "@/assets/icons/activity-outline";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import InformationCircleIcon from "@/assets/icons/information-circle-outline";
import LogoutIcon from "@/assets/icons/logout-outline";
import ReorderIcon from "@/assets/icons/reorder-exercises";
import TimerIcon from "@/assets/icons/timer-outline";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import NoteAddIcon from "@/assets/icons/vuesax-note-add-outline";
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

type WorkoutSettingsProps = {
  handleClosePanel: () => void;
};

export const WorkoutSettings = ({ handleClosePanel }: WorkoutSettingsProps) => {
  return (
    <View className="mx-4 mt-2 flex-1">
      <View className="mb-6 w-full flex-row items-center justify-between">
        <Text className="font-interBold text-2xl text-gray-900">
          Workout settings
        </Text>
        <TouchableOpacity
          onPress={handleClosePanel}
          className="shrink rounded-full bg-gray-100 p-2"
        >
          <XMarkIcon fill="#111827" width={24} height={24} />
        </TouchableOpacity>
      </View>
      {options.map((option, index) => (
        <View
          key={option.id}
          className={`w-full flex-row items-center justify-between py-4 ${
            index !== options.length - 1 ? "border-b border-b-gray-200" : ""
          }`}
        >
          <View className="flex-1 flex-row items-center">
            <option.icon fill={"#111827"} stroke={"#111827"} />
            <View className="ml-3 flex-1 flex-row items-center justify-between">
              <Text className="font-interSemiBold text-base leading-5 text-gray-900">
                {option.name}
              </Text>
              {option.value && (
                <Text className="mr-3 font-interRegular text-sm leading-5 text-gray-500">
                  {option.value}
                </Text>
              )}
            </View>
          </View>
          <ChevronRightIcon fill="#9CA3AF" width={20} height={20} />
        </View>
      ))}
    </View>
  );
};

const options = [
  { id: 1, name: "Exercise guide", icon: InformationCircleIcon },
  { id: 2, name: "Previous stats", icon: ActivityOutlineIcon },
  { id: 3, name: "One Rep Max", icon: Chart2Icon },
  { id: 4, name: "Reorder exercises", icon: ReorderIcon },
  { id: 5, name: "Rest timer", icon: TimerIcon, value: "00:45" },
  {
    id: 6,
    name: "Preferred units",
    icon: CalculatorOutline,
    value: "Metric/kg",
  },
  { id: 7, name: "Add note", icon: NoteAddIcon, value: "1 note" },
  { id: 8, name: "Change gym", icon: LogoutIcon, value: "Gold's Gym" },
];
