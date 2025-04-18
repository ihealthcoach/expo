import { View, Text } from "react-native";
import React from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import FireMini24Icon from "@/assets/icons/fire-mini-24";
import MapPinOutlineIcon from "@/assets/icons/map-pin-outline-24";

const TodayActivitiesRunning = () => {
  return (
    <View className="mb-6">
      <View className="flex items-center justify-between">
        <View className="w-full flex-1 flex-row justify-between">
          <Text className="mb-3 font-interMedium text-xs text-gray-900">
            Running
          </Text>
          <ArrowRightIcon width={20} height={20} fill="#111827" />
        </View>
        {/* TODO: Magically, set the length of the dividers */}
        <View className="w-full flex-row justify-between divide-x-2 divide-gray-300">
          <View className="flex-1 gap-2 pr-4">
            <ClockOutline24Icon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              40 min 17 sec
            </Text>
          </View>
          <View className="flex-1 gap-2  px-4">
            <FireMini24Icon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              140 kcal
            </Text>
          </View>
          <View className="flex-1 gap-2 pl-4">
            <MapPinOutlineIcon width={24} height={24} />
            <Text className="font-interSemiBold text-xs text-gray-900">
              4,2 km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayActivitiesRunning;
