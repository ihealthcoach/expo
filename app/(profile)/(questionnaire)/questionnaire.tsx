import { View, Text } from "react-native";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import ExportOutlineIcon from "@/assets/icons/export-outline";

interface Option {
  id: number;
  title: string;
  value?: string;
  iconInTheEnd?: string;
}

const optionsBody = [
  {
    id: 1,
    title: "Main goal",
    value: "Muscular & toned",
  },
  {
    id: 2,
    title: "Workout",
    value: "Up to 5 days a week",
  },
  {
    id: 3,
    title: "Fitness level",
    value: "Advanced",
  },
  {
    id: 4,
    title: "Weight",
    value: "86 kg",
  },
  {
    id: 5,
    title: "Height",
    value: "192 cm",
  },
  {
    id: 6,
    title: "Age",
    value: "39",
  },
  {
    id: 7,
    title: "Bodytype",
    value: "Mesomorph",
  },
];

const optionsNutrition = [
  {
    id: 1,
    title: "Food preferences",
    value: "Omnivore",
  },
  {
    id: 2,
    title: "Allergies",
    value: "Dairy, nuts ...",
  },
];

const ProfileQuestionnaire = () => {
  return (
    <View>
      <Text className="mb-3 font-interSemiBold text-2xl leading-[30px] text-gray-900">
        Body
      </Text>
      <View className="mb-6 rounded-lg border border-gray-200 bg-gray-50">
        {optionsBody.map((option: Option, index: number) => (
          <View
            key={option.id}
            className={`flex-row py-4 ${index !== optionsBody.length - 1 ? "mx-4 border-b border-gray-100" : "mx-4"}`}
          >
            <Text className="font-interMedium text-base leading-[20px] text-gray-900">
              {option.title}
            </Text>
            <View className="flex-1 flex-row items-center justify-end">
              {option?.value && (
                <Text className="font-interMedium text-base text-gray-400">
                  {option?.value}
                </Text>
              )}
              <ChevronRightIcon fill={"#9CA3AF"} className="ml-3" />
            </View>
          </View>
        ))}
      </View>

      <Text className="mb-3 font-interSemiBold text-2xl leading-[30px] text-gray-900">
        Nutrition & allergies
      </Text>
      <View className="mb-12 rounded-lg border border-gray-200 bg-gray-50">
        {optionsNutrition.map((option: Option, index: number) => (
          <View
            key={option.id}
            className={`flex-row py-4 ${index !== optionsBody.length - 1 ? "mx-4 border-b border-gray-100" : "mx-4"}`}
          >
            <Text className="font-interMedium text-base leading-[20px] text-gray-900">
              {option.title}
            </Text>
            <View className="flex-1 flex-row items-center justify-end">
              {option?.value && (
                <Text className="font-interMedium text-base text-gray-400">
                  {option?.value}
                </Text>
              )}
              <ChevronRightIcon fill={"#9CA3AF"} className="ml-3" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileQuestionnaire;
