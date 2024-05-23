import { View, Text, ScrollView, ScrollViewBase } from "react-native";
import React, { useEffect, useRef } from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import Button from "@/components/Button/Button";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ExerciseFilters from "@/components/Modals/ExerciseFilters/ExerciseFilters";
import ExerciseSetType from "@/components/Modals/ExerciseSetType/ExerciseSetType";
import { Link } from "expo-router";

const Modals = () => {
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
      <HeaderWithBackArrow path="/(dev)/workout/overview">
        <Text>List of modals</Text>
      </HeaderWithBackArrow>
      <View className="mx-4 flex-1">
        <ScrollView
          className="flex-1 gap-4"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={"/(workout)/modals/exerciseFilters"}
            className="font-interMedium text-xl"
          >
            Exercise filters
          </Link>
          <Link
            href={"/(workout)/modals/exerciseSetType"}
            className="font-interMedium text-xl"
          >
            Exercise set type
          </Link>
          <Link
            href={"/(workout)/modals/workoutsSettings"}
            className="font-interMedium text-xl"
          >
            Workout settings
          </Link>
        </ScrollView>
      </View>
    </View>
  );
};

export default Modals;
