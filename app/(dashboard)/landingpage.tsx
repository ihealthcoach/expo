import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React, { useMemo, useState, useRef } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
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
import BottomNavigation from "@/components/BottomNavigation";
import HomeIcon from "@/assets/icons/vuesax-linear-home";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import ChartBarIcon from "@/assets/icons/chart-bar-outline";
import BottomNavigationAllIcons from "@/components/BottomNavigationAllIcons";
import XMarkIcon from "@/assets/icons/x-mark-mini";

const landingpage = () => {
  // const snapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const snapPoints = useMemo(() => ["55%"], []);
  // TODO: Console warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePanel = () => bottomSheetRef.current?.close();
  const handleOpenPanel = () => {
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
      {/* <Button
        text="Plus icon"
        bgColor="bg-gray-900"
        onPress={handleOpenPanel}
        icon={<PlusIcon fill="#FCFEFE" width={24} height={24} />}
      /> */}
      {/* TODO: For now, all icons (in)active state is hardcoded into SVG */}
      <BottomNavigationAllIcons handleOpenPanel={handleOpenPanel} />
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          // enableDynamicSizing={true}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
          // style={[{ borderRadius: 100 }]}
          handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
        >
          {/* <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}> */}
          <View className="mx-4 mt-2 flex-1 items-center ">
            <View className="flex-1 items-center">
              <View className="mb-6 w-full flex-row items-center justify-between">
                <Text className="font-interBold text-2xl text-gray-900">
                  Workouts
                </Text>
                <Pressable
                  onPress={handleClosePanel}
                  className="shrink rounded-full bg-gray-100 p-2"
                >
                  <XMarkIcon fill="#FCFEFE" width={24} height={24} />
                </Pressable>
              </View>

              <View className="flex items-center justify-between ">
                <Link href="#" asChild>
                  <Button
                    text="Track a workout"
                    bgColor="bg-gray-50 border border-gray-200"
                  />
                </Link>
                <Link href="#" asChild>
                  <Button
                    text="Workout history"
                    bgColor="bg-gray-50 border border-gray-200"
                  />
                </Link>
                <Link href="#" asChild>
                  <Button
                    text="My workout templates"
                    bgColor="bg-gray-50 border border-gray-200"
                  />
                </Link>
                <Link href="#" asChild>
                  <Button
                    text="Find a workout"
                    bgColor="bg-gray-50 border border-gray-200"
                  />
                </Link>
              </View>
            </View>
          </View>
          {/* </BottomSheet> */}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default landingpage;
