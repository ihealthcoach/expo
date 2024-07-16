import CalendarDaysOutlineIcon from "@/assets/icons/calendar-days-outline/calendar-days-outline";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import Clock16Icon from "@/assets/icons/clock-16";
import ClockLinearVuesax from "@/assets/icons/clock-linear-vuesax/clock-linear-vuesax";
import { View, Text } from "react-native";

interface CardProps {
  title: string;
  date: string;
  time: string;
  duration: string;
  weight_lifted: number;
  cardio: string;
  rating: string;
}

const Card = ({
  title,
  date,
  time,
  duration,
  weight_lifted,
  cardio,
  rating,
}: CardProps) => {
  return (
    <View className="mb-2 flex-row items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
      <View>
        <Text className="mb-[2px] font-interSemiBold text-base leading-[20px] text-indigo-600">
          {title}
        </Text>
        <View className="mb-[10px] flex-row items-center gap-[6px]">
          <View className="flex-row items-center">
            <CalendarDaysOutlineIcon stroke={"#9CA3AF"} className="mr-[2px]" />
            <Text className="font-interRegular text-[11px] leading-[17.5px] text-gray-400">
              {date}
            </Text>
          </View>
          <View className="flex-row items-center">
            <ClockLinearVuesax stroke={"#9CA3AF"} className="mr-[2px]" />
            <Text className="font-interRegular text-[11px] leading-[17.5px] text-gray-400">
              {time}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-9">
          <View>
            <Text className="font-interBold text-base leading-[20px] text-gray-600">
              {duration}
            </Text>
            <Text className="mb-[6px] font-interRegular text-[9px] leading-[11.25px] text-gray-400">
              Duration
            </Text>
            <Text className="font-interBold text-base leading-[20px] text-gray-600">
              {cardio}
            </Text>
            <Text className="font-interRegular text-[9px] leading-[11.25px] text-gray-400">
              Cardio
            </Text>
          </View>
          <View>
            <Text className="font-interBold text-base leading-[20px] text-gray-600">
              {weight_lifted}
            </Text>
            <Text className="mb-[6px] font-interRegular text-[9px] leading-[11.25px] text-gray-400">
              Weight Lifted
            </Text>
            <Text className="font-interBold text-base leading-[20px] text-gray-600">
              {rating}
            </Text>
            <Text className="font-interRegular text-[9px] leading-[11.25px] text-gray-400">
              Rating
            </Text>
          </View>
        </View>
      </View>
      <View className="flex items-center justify-end rounded-lg bg-gray-100 px-6 py-8">
        <Text className="text-2xl text-gray-300">Image</Text>
      </View>
    </View>
  );
};

export default Card;
