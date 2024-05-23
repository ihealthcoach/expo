import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseSetType from "@/components/Modals/ExerciseSetType/ExerciseSetType";

const ExerciseFilterModal = () => {
  const exerciseFiltersRef = useRef(null);

  // const handleOpenFilters = () => {
  //   exerciseFiltersRef.current?.present();
  // };

  useEffect(() => {
    if (exerciseFiltersRef.current) {
      exerciseFiltersRef.current.open();
    }
  }, []);

  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(workout)/modals">
        <Text>Exercise set type modal</Text>
      </HeaderWithBackArrow>
      <View className="mx-4 flex-1">
        <ExerciseSetType />
      </View>
    </View>
  );
};

export default ExerciseFilterModal;
