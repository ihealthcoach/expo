import { View, Text } from "react-native";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import ExportOutlineIcon from "@/assets/icons/export-outline";

interface Option {
  id: number;
  title: string;
  icon: React.ReactNode;
  value?: string;
  iconInTheEnd?: string;
}

const optionsWorkout = [
  {
    id: 1,
    title: "Preferred units",
    icon: <CalculatorOutline className="mr-2" />,
    value: "Metric/kg",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 2,
    title: "Rest timer",
    icon: <ClockOutline24Icon className="mr-2" />,
    value: "45 sec",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 3,
    title: "Export workout data",
    icon: <ExportOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
];

const Account = () => {
  return (
    <View>
      <Text className="mb-3 font-interSemiBold text-2xl leading-[30px] text-gray-900">
        Workout
      </Text>
      <View className="rounded-lg border border-gray-200 bg-gray-50">
        {optionsWorkout.map((option: Option, index: number) => (
          <View
            key={option.id}
            className={`flex-row py-4 ${index !== optionsWorkout.length - 1 ? "mx-4 border-b border-gray-100" : "mx-4"}`}
          >
            <View className="flex-row items-center">
              {option.icon}
              <Text className="font-interMedium text-base leading-[20px] text-gray-900">
                {option.title}
              </Text>
            </View>
            <View className="flex-1 flex-row items-center justify-end">
              {option?.value && (
                <Text className="font-interMedium text-base text-gray-400">
                  {option?.value}
                </Text>
              )}
              {option.iconInTheEnd === "chevronRight" && (
                <ChevronRightIcon fill={"#9CA3AF"} className="ml-3" />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Account;
