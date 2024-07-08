import Greeting from "@/components/Greeting/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React, { useMemo, useState, useRef } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import Button from "@/components/Button/Button";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import TodayActivities from "@/components/TodayActivities";
import AddWidget from "@/components/AddWidget/AddWidget";

import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
// import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import PlusIcon from "@/assets/icons/plus-mini-20";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
import HomeIcon from "@/assets/icons/vuesax-linear-home";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import ChartBarIcon from "@/assets/icons/chart-bar-outline";
import BottomNavigationAllIcons from "@/components/BottomNavigationAllIcons/BottomNavigationAllIcons";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import IcnTrainingIcon from "@/assets/icons/icn-training";
import RulerOutline from "@/assets/icons/vuesax-ruler-outline";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import ClockOutline24Icon from "@/assets/icons/clock-outline-24";
import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import IcnChefIcon from "@/assets/icons/icn-chef";
import NoteAddIcon from "@/assets/icons/vuesax-note-add-outline";
import BarcodeIcon from "@/assets/icons/vuesax-barcode-outline";

const optionsWorkout = [
  { id: 1, name: "Start a workout", icon: IcnTrainingIcon },
  { id: 2, name: "Add body metrics", icon: RulerOutline },
  {
    id: 3,
    name: "Preferred units",
    icon: CalculatorOutline,
    value: "Metric/kg",
  },
  {
    id: 4,
    name: "Rest timer",
    icon: ClockOutline24Icon,
    value: "45 sec",
  },
  { id: 5, name: "Add exercise", icon: PlusCircleIcon },
];

const optionsFood = [
  { id: 1, name: "Browse recipes", icon: IcnChefIcon },
  { id: 2, name: "Add recipe", icon: NoteAddIcon },
  {
    id: 3,
    name: "Scan barcode",
    icon: BarcodeIcon,
  },
];

const landingpage = () => {
  const [openBackDrop, setOpenBackDrop] = useState<boolean>(false);
  const [nameOfModal, setNameOfModal] = useState<string>("");
  const [snapPointsState, setSnapPointsState] = useState<string>("55%");

  // const snapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const snapPoints = useMemo(() => [snapPointsState], [snapPointsState]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenPanel = (modal, snapPoints) => {
    // const handleOpenPanel = (modal: string, snapPoints: string) => {
    setSnapPointsState(snapPoints);
    setNameOfModal(modal);
    bottomSheetRef.current?.present();
    setOpenBackDrop(true);
  };

  const handleClosePanel = () => bottomSheetRef.current?.close();
  // const handleOpenPanel = () => {
  //   // bottomSheetRef.current?.expand();
  //   bottomSheetRef.current?.present();
  // };

  return (
    <BottomSheetModalProvider>
      <View className="mx-4 flex-1">
        <ScrollView>
          <Header />
          <Greeting />
          <TodayGoals />

          <Button
            text="Start a workout"
            bgColor="bg-gray-900"
            onPress={() => handleOpenPanel("workouts", "55%")}
            iconAfter={<ArrowRightIcon fill="#FCFEFE" width={24} height={24} />}
          />
          <TodayActivities />
          <AddWidget />
        </ScrollView>
        {/* TODO: For now, all icons (in)active state is hardcoded into SVG */}
        <BottomNavigationAllIcons
          handleOpenPanel={(modal, snapPoints) =>
            handleOpenPanel(modal, snapPoints)
          }
          // handleOpenPanel={() => handleOpenPanel("shortcuts", "80%")}
          setNameOfModal={setNameOfModal}
        />
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          // enableDynamicSizing={true}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
          handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
          backdropComponent={({ animatedIndex }) => (
            <Pressable
              onPress={handleClosePanel}
              className={`absolute left-0 right-0 top-0 h-screen bg-[#24292f] transition-opacity duration-300 ${openBackDrop ? "opacity-60" : "opacity-0"}`}
            />
          )}
        >
          {/* <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}> */}
          {nameOfModal === "workouts" && (
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
                    <XMarkIcon fill="#374151" width={24} height={24} />
                  </Pressable>
                </View>

                <View className="flex items-center justify-between ">
                  <Link href="#" asChild>
                    <Button
                      text="Track a workout"
                      textColor="text-gray-700"
                      bgColor="bg-gray-50 border border-gray-200"
                    />
                  </Link>
                  <Link href="#" asChild>
                    <Button
                      text="Workout history"
                      textColor="text-gray-700"
                      bgColor="bg-gray-50 border border-gray-200"
                    />
                  </Link>
                  <Link href="#" asChild>
                    <Button
                      text="My workout templates"
                      textColor="text-gray-700"
                      bgColor="bg-gray-50 border border-gray-200"
                    />
                  </Link>
                  <Link href="#" asChild>
                    <Button
                      text="Find a workout"
                      textColor="text-gray-700"
                      bgColor="bg-gray-50 border border-gray-200"
                    />
                  </Link>
                </View>
              </View>
            </View>
          )}
          {/* </BottomSheet> */}
          {nameOfModal === "shortcuts" && (
            <View className="mx-4 mt-2 flex-1">
              <View className="mb-6 w-full flex-row items-center justify-between">
                <Text className="font-interBold text-2xl text-gray-900">
                  Shortcuts
                </Text>
                <Pressable
                  onPress={handleClosePanel}
                  className="shrink rounded-full bg-gray-100 p-2"
                >
                  <XMarkIcon fill="#111827" width={24} height={24} />
                </Pressable>
              </View>
              <Text className="mb-3 font-interSemiBold text-lg leading-[22.5px]">
                Workout
              </Text>

              <View className="mb-6 rounded-lg border border-gray-200 bg-gray-50 px-4">
                {optionsWorkout.map((option, index) => (
                  <View
                    key={option.id}
                    className={`w-full flex-row items-center justify-between py-4 ${
                      index !== optionsWorkout.length - 1
                        ? "border-b border-b-gray-200"
                        : ""
                    }`}
                  >
                    <View className="flex-1 flex-row items-center">
                      <option.icon fill={"#111827"} stroke={"#111827"} />
                      <View className="ml-3 flex-1 flex-row items-center justify-between">
                        <Text className="font-interSemiBold text-base leading-5 text-gray-900">
                          {option.name}
                        </Text>
                        {option.value && (
                          <Text className="mr-3 font-interRegular text-sm leading-5 text-gray-500">
                            {option.value}
                          </Text>
                        )}
                      </View>
                    </View>
                    <ChevronRightIcon fill="#9CA3AF" width={20} height={20} />
                  </View>
                ))}
              </View>
              <Text className="mb-3 font-interSemiBold text-lg leading-[22.5px]">
                Food
              </Text>
              <View className="rounded-lg border border-gray-200 bg-gray-50 px-4">
                {optionsFood.map((option, index) => (
                  <View
                    key={option.id}
                    className={`w-full flex-row items-center justify-between py-4 ${
                      index !== optionsWorkout.length - 1
                        ? "border-b border-b-gray-200"
                        : ""
                    }`}
                  >
                    <View className="flex-1 flex-row items-center">
                      <option.icon fill={"#111827"} stroke={"#111827"} />
                      <View className="ml-3 flex-1 flex-row items-center justify-between">
                        <Text className="font-interSemiBold text-base leading-5 text-gray-900">
                          {option.name}
                        </Text>
                      </View>
                    </View>
                    <ChevronRightIcon fill="#9CA3AF" width={20} height={20} />
                  </View>
                ))}
              </View>
            </View>
          )}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default landingpage;
