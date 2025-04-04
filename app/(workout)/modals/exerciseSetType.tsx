import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseSetType from "@/components/Modals/ExerciseSetType/ExerciseSetType";

const ExerciseSetTypeDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(workout)/modals">
        <Text>Exercise set type modal</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseSetType />
      </View>
    </View>
  );
};

export default ExerciseSetTypeDemo;
