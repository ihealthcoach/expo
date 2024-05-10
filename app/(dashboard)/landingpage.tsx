import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React, { useMemo, useState, useRef } from "react";
import { ScrollView, View, Text } from "react-native";
import Button from "@/components/Button";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import TodayActivities from "@/components/TodayActivities";
import AddWidget from "@/components/AddWidget";

import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
// import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import PlusIcon from "@/assets/icons/plus-mini-20";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const landingpage = () => {
  const snapPoints = useMemo(() => ["50%"], []);
  // TODO: Console warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => {
    // console.log("open panel");
    // bottomSheetRef.current?.expand();
    bottomSheetRef.current?.present();
  };

  return (
    <View className="mx-4 flex-1">
      <ScrollView>
        <Header />
        <Greeting />
        <TodayGoals />

        <Button
          text="Start a workout"
          bgColor="bg-gray-900"
          onPress={handleClosePanel}
          icon={<ArrowRightIcon fill="#FCFEFE" width={24} height={24} />}
        />
        <TodayActivities />
        <AddWidget />
      </ScrollView>
      <Button
        text="Plus icon"
        bgColor="bg-gray-900"
        onPress={handleOpenPanel}
        icon={<PlusIcon fill="#FCFEFE" width={24} height={24} />}
      />
      {/* <Bottona */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          // <BottomSheetModal
          ref={bottomSheetRef}
          // index={-1}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50, backgroundColor: "#FCFEFE" }}
          handleIndicatorStyle={{ display: "none" }}
        >
          <View className="mx-4 mt-2 flex-1 items-center ">
            <View className="items-center ">
              <Text className="mb-4 font-interBold text-2xl text-gray-900">
                Workouts
              </Text>

              <Link href="/trackWorkout" asChild>
                <Button
                  text="Track workout"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
                />
              </Link>

              <Link href="/workoutHistory" asChild>
                <Button
                  text="Workout history"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
                />
              </Link>

              <Link href="/findWorkout" asChild>
                <Button
                  text="Find a workout"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
                />
              </Link>
            </View>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default landingpage;
