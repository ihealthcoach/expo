import { View, Text } from "react-native";
import React from "react";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import TodayGoalsCard from "./TodayGoalsCard";
import StepsIcon from "@/assets/icons/steps";
import MiniFire16Icon from "@/assets/icons/fire-mini-16";
import Clock16Icon from "@/assets/icons/clock-16";
import MapPinMiniIcon from "@/assets/icons/map-pin-16";

const TodayGoals = () => {
  return (
    <View className="mb-3">
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="pr-1 font-interSemiBold text-lg">Today's goals</Text>
          <ChevronDownIcon />
        </View>
        <View className="flex-row items-center">
          <Text className="pr-1 font-interMedium">Edit goals</Text>
          <ArrowRightIcon width={14} height={14} fill="#111827" />
        </View>
      </View>
      <View className="">
        <View className="w-full flex-row">
          <TodayGoalsCard
            bgColor="#EED6C6"
            // marginRight
            title="Calories"
            icon={<MiniFire16Icon />}
            value="1.500"
            unit="kcal"
            goal="2.500"
          />
          <TodayGoalsCard
            bgColor="#E2EFB2"
            title="Active time"
            icon={<Clock16Icon />}
            value="60"
            unit="min."
            goal="120"
          />
        </View>
        <View className="w-full flex-row">
          {/* <View className="w-full flex-row" style={{ gap: 8 }}> */}
          <TodayGoalsCard
            bgColor="#C4F0EE"
            // marginRight
            icon={<StepsIcon />}
            title="Steps"
            value="3.500"
            unit="steps"
            goal="10.000"
          />
          <TodayGoalsCard
            bgColor="#E8D5F0"
            icon={<MapPinMiniIcon />}
            title="Distance"
            value="9.4"
            unit="km"
            goal="10.00"
          />
        </View>
      </View>
    </View>
  );
};

export default TodayGoals;
