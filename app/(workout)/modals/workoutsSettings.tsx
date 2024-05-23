import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import WorkoutSettings from "@/components/Modals/WorkoutSettings/WorkoutSettings";

const WorkoutsSettingsDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Workout settings</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <WorkoutSettings />
      </View>
    </View>
  );
};

export default WorkoutsSettingsDemo;
