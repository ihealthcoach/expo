import { View, Text } from "react-native";
import React from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import FireMini24Icon from "@/assets/icons/fire-mini-24";
import MapPinOutlineIcon from "@/assets/icons/map-pin-outline-24";
import IcnTrainingIcon from "@/assets/icons/icn-training";

const TodayActivitiesGym = () => {
  return (
    <View>
      <View className="flex items-center justify-between">
        <View className="w-full flex-1 flex-row justify-between">
          <Text className="mb-3 font-interMedium text-xs text-gray-900">
            Gym
          </Text>
          <ArrowRightIcon width={20} height={20} fill="#111827" />
        </View>
        <View className="w-full flex-row justify-between divide-x-2 divide-gray-300">
          <View className="flex-1 gap-2 pr-4">
            <ClockOutline24Icon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              1 hour 15 min
            </Text>
          </View>
          <View className="flex-1 gap-2  px-4">
            <FireMini24Icon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              812 kcal
            </Text>
          </View>
          <View className="flex-1 gap-2 pl-4">
            <IcnTrainingIcon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              8 exercises
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayActivitiesGym;
