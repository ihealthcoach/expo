import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import { View, Text } from "react-native";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <View className="mb-2 flex-row items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
      <View>
        <Text className="mb-[2px] font-interSemiBold text-base leading-[20px] text-gray-900">
          {title}
        </Text>
        <Text className="max-w-[310px] font-interRegular text-sm leading-[17.5px] text-gray-400">
          {description}
        </Text>
      </View>
      <ChevronRightIcon fill={"#9CA3AF"} />
    </View>
  );
};

export default Card;
