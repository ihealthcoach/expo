import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  InputAccessoryView,
  Keyboard,
} from "react-native";
import React, { useMemo, useRef, useState, useEffect } from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import EllipsisHorizontalIcon from "@/assets/icons/ellipsis-horizontal-outline";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import PlusIcon from "@/assets/icons/plus-mini-20";
import InformationCircleIcon from "@/assets/icons/information-circle-outline";
import ActivityOutlineIcon from "@/assets/icons/activity-outline";
import Chart2Icon from "@/assets/icons/vuesax-chart-2-outline";
import NoteAddIcon from "@/assets/icons/vuesax-note-add-outline";
import Note2Outline from "@/assets/icons/NoteTwoOutline";
import ActivityOutlineVuesax from "@/assets/icons/ActivityOutlineVuesax";
import type { Set, ExerciseTrackingStore } from "@/types/exercise-tracking";
import useExerciseTrackingStore from "@/store/exerciseTrackingStore";
import CheckMiniIcon from "@/assets/icons/check-mini";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import XMarkIcon from "@/assets/icons/x-mark-mini";
import ReorderIcon from "@/assets/icons/reorder-exercises";
import TimerIcon from "@/assets/icons/timer-outline";
import CalculatorOutline from "@/assets/icons/calculator-outline";
import LogoutIcon from "@/assets/icons/logout-outline";
import { Image } from "expo-image";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";

const ExerciseTracking = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [weightInputValue, setWeightInputValue] = useState<string>("");
  const [repsInputValue, setRepsInputValue] = useState<string>("");
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [openBackDrop, setOpenBackDrop] = useState<boolean>(false);
  const [nameOfModal, setNameOfModal] = useState<string>("");
  const [snapPointsState, setSnapPointsState] = useState<string>("1%");
  const weightInputRef = useRef<TextInput>(null);
  const repsInputRef = useRef<TextInput>(null);

  console.log("Is Input Visible:", isInputVisible);
  console.log("Keyboard height:", keyboardHeight);

  const options = [
    { id: 1, name: "Exercise guide", icon: InformationCircleIcon },
    { id: 2, name: "Previous stats", icon: ActivityOutlineIcon },
    { id: 3, name: "One Rep Max", icon: Chart2Icon },
    { id: 4, name: "Reorder exercises", icon: ReorderIcon },
    { id: 5, name: "Rest timer", icon: TimerIcon, value: "00:45" },
    {
      id: 6,
      name: "Preferred units",
      icon: CalculatorOutline,
      value: "Metric/kg",
    },
    { id: 7, name: "Add note", icon: NoteAddIcon, value: "1 note" },
    { id: 8, name: "Change gym", icon: LogoutIcon, value: "Gold's Gym" },
  ];

  const ExerciseOneRepMaxData = [
    {
      date: "January 21, 2024",
      value: 85.9,
    },
    {
      date: "January 18, 2024",
      value: 56.25,
    },
    {
      date: "January 15, 2024",
      value: 33,
    },
    {
      date: "January 10, 2024",
      value: 42.1,
    },
    {
      date: "January 04, 2024",
      value: 31.7,
    },
    {
      date: "December 31, 2023",
      value: 21,
    },
  ];

  const exercisePreviousStatsActiveDates = [
    {
      id: 1,
      date: "10",
      day: "Wed",
    },
    {
      id: 2,
      date: "15",
      day: "Mon",
    },
    {
      id: 3,
      date: "16",
      day: "Tue",
    },
    {
      id: 4,
      date: "18",
      day: "Thu",
    },
    {
      id: 5,
      date: "26",
      day: "Fri",
    },
    {
      id: 6,
      date: "1",
      day: "Thu",
    },
    {
      id: 7,
      date: "2",
      day: "Today",
    },
  ];

  const exercisePreviousStatsData = [
    {
      id: 1,
      set_number: 1,
      type: "Standard set",
      weight: 41.3,
      weight_unit: "kg",
      reps: 20,
    },
    {
      id: 2,
      set_number: 2,
      type: "Standard set",
      weight: 61.3,
      weight_unit: "kg",
      reps: 12,
    },
    {
      id: 3,
      set_number: 3,
      type: "Standard set",
      weight: 76.3,
      weight_unit: "kg",
      reps: 8,
    },
    {
      id: 4,
      set_number: 4,
      type: "Standard set",
      weight: 76.3,
      weight_unit: "kg",
      reps: 6,
    },
    {
      id: 5,
      set_number: 5,
      type: "Standard set",
      weight: 76.3,
      weight_unit: "kg",
      reps: 5,
    },
  ];

  const snapPoints = useMemo(() => [snapPointsState], [snapPointsState]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenPanel = (modal: string, snapPoints: string) => {
    setSnapPointsState(snapPoints);
    setNameOfModal(modal);
    bottomSheetRef.current?.present();
    setOpenBackDrop(true);
  };

  const handleClosePanel = () => {
    setNameOfModal("");
    bottomSheetRef.current?.close();
    setOpenBackDrop(false);
  };

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     (e) => {
  //       setKeyboardHeight(e.endCoordinates.height);
  //     },
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setKeyboardHeight(0);
  //     },
  //   );

  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  const handlePress = () => {
    setInputVisible(true);
    setTimeout(() => {
      if (weightInputRef.current) {
        weightInputRef.current.focus();
      }
    }, 100); // Delay to ensure the input is rendered before focusing
  };

  const handleSubmit = () => {
    console.log("Weight:", weightInputValue);
    console.log("Reps:", repsInputValue);
    setInputVisible(false);
  };

  const { sets, addSet, deleteSet, updateSetCompletion } =
    useExerciseTrackingStore();
  return (
    <BottomSheetModalProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {isInputVisible && Platform.OS === "ios" && (
          <InputAccessoryView>
            <View className=" bg-gray-50 p-4 pb-9">
              <View className="w-full flex-row items-center justify-between pb-10">
                <View className="flex-row items-center">
                  <Text className="font-interMedium text-sm text-gray-900">
                    Standard set
                  </Text>
                  <ChevronDownIcon />
                </View>
                <View className="flex-row items-center gap-2">
                  <View className="relative">
                    <TextInput
                      className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                      ref={weightInputRef}
                      value={weightInputValue}
                      onChangeText={setWeightInputValue}
                      placeholder="Kg"
                      onSubmitEditing={() => setInputVisible(false)}
                      keyboardType="decimal-pad"
                    />
                    <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                      <Text className="font-interRegular text-sm text-gray-900">
                        kg
                      </Text>
                    </View>
                  </View>
                  <Text className="font-interSemiBold text-sm text-gray-900">
                    x
                  </Text>
                  <View className="relative">
                    <TextInput
                      className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                      ref={repsInputRef}
                      value={repsInputValue}
                      onChangeText={setRepsInputValue}
                      placeholder="Reps"
                      onSubmitEditing={() => setInputVisible(false)}
                      keyboardType="number-pad"
                    />
                    <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                      <Text className="font-interRegular text-sm text-gray-900">
                        reps
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Button
                text="Save set"
                bgColor="bg-indigo-600"
                onPress={handleSubmit}
              />
            </View>
          </InputAccessoryView>
        )}
        {isInputVisible && Platform.OS === "android" && (
          <View
            style={{
              // position: "absolute",
              // bottom: -400,
              // // bottom: keyboardHeight,
              // left: 0,
              // right: 0,
              backgroundColor: "#f8f8f8",
              padding: 16,
            }}
          >
            <View className="w-full flex-row items-center justify-between pb-10">
              <View className="flex-row items-center">
                <Text className="font-interMedium text-sm text-gray-900">
                  Standard set
                </Text>
                <ChevronDownIcon />
              </View>
              <View className="flex-row items-center gap-2">
                <View className="relative">
                  <TextInput
                    className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                    ref={weightInputRef}
                    value={weightInputValue}
                    onChangeText={setWeightInputValue}
                    placeholder="Kg"
                    onSubmitEditing={() => setInputVisible(false)}
                    keyboardType="decimal-pad"
                  />
                  <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                    <Text className="font-interRegular text-sm text-gray-900">
                      kg
                    </Text>
                  </View>
                </View>
                <Text className="font-interSemiBold text-sm text-gray-900">
                  x
                </Text>
                <View className="relative">
                  <TextInput
                    className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                    ref={repsInputRef}
                    value={repsInputValue}
                    onChangeText={setRepsInputValue}
                    placeholder="Reps"
                    onSubmitEditing={() => setInputVisible(false)}
                    keyboardType="number-pad"
                  />
                  <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                    <Text className="font-interRegular text-sm text-gray-900">
                      reps
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Button
              text="Save set"
              bgColor="bg-indigo-600"
              onPress={handleSubmit}
            />
          </View>
        )}
      </KeyboardAvoidingView>

      <View className="mx-4 flex-1">
        <HeaderWithBackArrow>
          <Text className="font-interRegular text-base text-gray-400">
            Exercise{" "}
            <Text className="font-interMedium text-gray-900">1 of 6</Text>
          </Text>
          <TouchableOpacity
            onPress={() => handleOpenPanel("workoutSettings", "68%")}
          >
            <EllipsisHorizontalIcon />
          </TouchableOpacity>
        </HeaderWithBackArrow>
        <View className="mb-12">
          <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
            Arnold press
          </Text>
          <View className="mb-2 flex-row items-center gap-2">
            <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
              4 of 5 sets completed
            </Text>
            <View className="rounded-full bg-gray-900 px-4 py-1">
              <Text className="font-interMedium text-sm leading-[17.5px] text-white-ih">
                Superset
              </Text>
            </View>
            {/* <Badge text="Superset" isDark /> */}
          </View>
          <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
            Exercise note ...
          </Text>
        </View>

        {/* Sets */}
        {sets.map((set, index) => (
          <TouchableOpacity onPress={handlePress} key={set.id}>
            <View
              key={set.id}
              className={`mx-4 mb-4 flex-row justify-between bg-gray-100 pb-[10px] ${
                index !== sets.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <View className="flex w-1/3 items-start justify-between">
                <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
                  {set.set_number.toString().padStart(2, "0")}
                </Text>
                <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
                  {set.type}
                </Text>
              </View>
              {/* TODO: Fix missing centering when set.weight is more than two digits */}
              {/* SOLUTION (MAYBE): Have three columns, each with a mapping */}
              <View className="flex-row items-baseline gap-4">
                <View className="items-center">
                  <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
                    {set.weight}
                  </Text>
                  <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
                    {set.weight_unit}
                  </Text>
                </View>
                <Text className="text-ms self-center font-interSemiBold leading-[17.5px] text-gray-400">
                  x
                </Text>
                <View className="items-center justify-center">
                  <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
                    {set.reps}
                  </Text>
                  <Text className="font-interRegular text-xs leading-[17.5px] text-gray-400">
                    reps
                  </Text>
                </View>
              </View>
              <View className="w-1/5 items-end self-center">
                {set.completed ? (
                  <CheckMiniIcon />
                ) : (
                  <View className="flex-row items-center justify-between">
                    <View className="rounded-full border border-gray-200 px-3 py-[6px]">
                      <Text className="font-interMedium text-xs leading-[15px] text-gray-400">
                        RPE
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View className="mx-4">
          <Button
            text="Add set"
            bgColor="bg-gray-50"
            textColor="text-gray-700"
            border="border-[1px] border-gray-200"
            iconAfter={<PlusIcon stroke="#374151" />}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View className="flex-1 justify-end">
          <View className="mx-9 flex-row justify-around rounded-full bg-gray-900 px-6 py-3">
            <TouchableOpacity
              onPress={() => handleOpenPanel("exerciseGuide", "90%")}
              className="items-center justify-center gap-2"
            >
              <InformationCircleIcon stroke={"#FCFEFE"} />
              <Text className="text-[9px] text-white-ih">Exercise guide</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOpenPanel("exercisePreviousStats", "80%")}
              className="items-center justify-center gap-2"
            >
              <ActivityOutlineVuesax />
              <Text className="text-[9px] text-white-ih">Previous stats</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOpenPanel("oneRepMax", "85%")}
              className="items-center justify-center gap-2"
            >
              <Chart2Icon />
              <Text className="text-[9px] text-white-ih">One Rep Max</Text>
            </TouchableOpacity>
            <View className="items-center justify-center gap-2">
              {/* BUG: SVG wasn't exported properly (from Figma) */}
              <Note2Outline fill={"#FCFEFE"} />
              <Text className="text-[9px] text-white-ih">Notes</Text>
            </View>
          </View>
        </View>
      </View>
      {/*MARK: Bottom sheet modal */}
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 20, backgroundColor: "#FCFEFE" }}
        handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
        onDismiss={() => setOpenBackDrop(false)}
        backdropComponent={({ animatedIndex }) => (
          <TouchableOpacity
            onPress={handleClosePanel}
            className={`absolute left-0 right-0 top-0 h-screen bg-[#24292f] transition-opacity duration-300 ${openBackDrop ? "opacity-60" : "opacity-0"}`}
          />
        )}
      >
        {/*MARK: Workout settings */}
        {nameOfModal === "workoutSettings" && (
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Workout settings
              </Text>
              <TouchableOpacity
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </TouchableOpacity>
            </View>
            {options.map((option, index) => (
              <View
                key={option.id}
                className={`w-full flex-row items-center justify-between py-4 ${
                  index !== options.length - 1
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
        )}
        {/*MARK: Exercise guide */}
        {nameOfModal === "exerciseGuide" && (
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Exercise guide
              </Text>
              <TouchableOpacity
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View className="mb-6">
              <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
                Arnold Press
              </Text>
            </View>
            <View className="mb-6 flex-1 flex-row">
              <Image
                source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
                className="h-full w-1/2"
              />
              <View className="w-1/2 py-6">
                <Image
                  contentFit="contain"
                  source={require("@/assets/test-data/chest.png")}
                  className="h-full w-full"
                />
              </View>
            </View>
            <View className="mb-6">
              <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
                How to
              </Text>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">1.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Start from the chest with your palms facing towards you.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">2.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Twist your forearms outwards as you move the weight upwards.
                  The end position should be the same as with a normal shoulder
                  press.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">3.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Slowly lower the weights back to the starting position,
                  twisting your forearms back to facing you.
                </Text>
              </View>
              <View className="mb-2 flex-row">
                <Text className="w-4 font-interRegular text-gray-600">4.</Text>
                <Text className="mr-4 font-interRegular text-gray-600">
                  Arnold presses have been accused of being harsh on shoulders
                  and rotator cuffs, so we would advise to start with low
                  weights for practicing the technique.
                </Text>
              </View>
            </View>
          </View>
        )}
        {/*MARK: One Rep Max */}
        {nameOfModal === "oneRepMax" && (
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                One Rep Max
              </Text>
              <TouchableOpacity
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View className="mb-6">
              <Text className="mb-1 font-interBold text-xl leading-[30px] text-indigo-600">
                Calculated One Rep Max{" "}
                <Text className="text-gray-900">85.9 kg</Text>
              </Text>
              <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
                January 21, 2024
              </Text>
            </View>
            <Image
              source={require("@/assets/test-data/graph_exercise_one_rep_max.png")}
              className="mb-6 h-[200px] w-full rounded-lg"
            />
            {ExerciseOneRepMaxData.map((item, index) => (
              <View
                key={index}
                className={`w-full items-center px-[6px] py-2 ${
                  index % 2 === 0 ? "" : "bg-gray-100"
                }`}
              >
                <View className="w-full flex-row items-center justify-between">
                  <Text className="mb-[2px] font-interRegular text-sm leading-[17.5px] text-gray-600">
                    {item.date}
                  </Text>
                  <Text className="max-w-xs font-interRegular text-sm leading-[17.5px] text-gray-600">
                    {item.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
        {/*MARK: Previous stats */}
        {nameOfModal === "exercisePreviousStats" && (
          <View className="mx-4 mt-2 flex-1">
            <View className="mb-6 w-full flex-row items-center justify-between">
              <Text className="font-interBold text-2xl text-gray-900">
                Previous stats
              </Text>
              <TouchableOpacity
                onPress={handleClosePanel}
                className="shrink rounded-full bg-gray-100 p-2"
              >
                <XMarkIcon fill="#111827" width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View className="mb-6">
              <Text className="mb-1 font-interBold text-xl leading-[30px] text-indigo-600">
                Arnold Press
              </Text>
              <Text className="font-interRegular text-sm leading-[17.5px] text-gray-400">
                5 sets I February 2, 2024 I 08:55
              </Text>
            </View>
            {/* TODO: Add horizontal scroll view here */}
            <View className="-mx-4 mb-6">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {exercisePreviousStatsActiveDates.map((date) => (
                  <View
                    key={date.id}
                    className="flex items-center justify-center gap-1"
                  >
                    <View className="flex items-center gap-2">
                      <View
                        className={`h-[50px] w-[50px] items-center justify-center rounded-full ${date.day === "Today" ? "bg-indigo-600" : "bg-gray-100"}`}
                      >
                        <Text
                          className={`font-interMedium text-base ${date.day === "Today" ? "text-white-ih" : "text-gray-400"}`}
                        >
                          {date.date}
                        </Text>
                      </View>
                      <Text
                        className={`font-interRegular text-xs ${date.day === "Today" ? "text-indigo-600" : "text-gray-400"}`}
                      >
                        {date.day.toUpperCase()}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View className="mb-6">
              {/* TODO: Add padding right or width to match Figma */}
              {exercisePreviousStatsData.map((item, index) => (
                <View
                  key={item.id}
                  className={`border-b border-gray-200 py-2 ${index !== exercisePreviousStatsData.length - 1 ? "" : "border-b-0"}`}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex justify-between">
                      <Text className="font-interMedium text-lg text-gray-900">
                        {item.set_number.toString().padStart(2, "0")}
                      </Text>
                      <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                        {item.type}
                      </Text>
                    </View>
                    <View className="flex-row gap-4">
                      <View className="flex items-center">
                        <Text className="font-interMedium text-lg text-gray-900">
                          {item.weight}
                        </Text>
                        <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                          {item.weight_unit}
                        </Text>
                      </View>
                      <View>
                        <Text className="mt-[6px] font-interSemiBold text-sm leading-[17.5px] text-gray-400">
                          x
                        </Text>
                      </View>
                      <View className="flex items-center">
                        <Text className="font-interMedium text-lg text-gray-900">
                          {item.reps}
                        </Text>
                        <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                          reps
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ExerciseTracking;
