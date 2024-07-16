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
import type { Set } from "@/types/exercise-tracking";
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
import { useGetGifByExerciseQuery } from "@/queries/gifQueries/gifQueries";
import {
  useSetByExerciseDetailsQuery,
  useUpdateSetMutation,
} from "@/queries/setQueries/setQueries";
import { getAllExerciseRelatedDetailsById } from "@/utils/services/exerciseDetailsFunctions/exerciseDetailsFunctions";
import {
  useExerciseDetailByIdQuery,
  useExerciseDetailWithSetsQuery,
} from "@/queries/exerciseDetailsQueries/exerciseDetailsQueries";
import { useGetExerciseByIdQuery } from "@/queries/exerciseQueries/exerciseQueries";
import { CustomKeyboardView } from "@/components/CustomKeyboardView/CustomKeyboardView";
import { ExercisePreviousStats } from "@/components/ExercisePreviousStats/ExercisePreviousStats";
import { ExerciseName } from "@/components/ExerciseName/ExerciseName";
import { Sets } from "@/components/Sets/Sets";
import { OneRepMax } from "@/components/OneRepMax/OneRepMax";
import { WorkoutSettings } from "@/components/WorkoutSettings/WorkoutSettings";
import { ExerciseGuide } from "@/components/ExerciseGuide/ExerciseGuide";

export type Props = {
  exerciseDetailsId: string;
};

const ExerciseTracking = ({
  exerciseDetailsId = "6145cb29-e82b-425c-a80e-4206679376e6", //
}: Props) => {
  const [openBackDrop, setOpenBackDrop] = useState<boolean>(false);
  const [nameOfModal, setNameOfModal] = useState<string>("");
  const [snapPointsState, setSnapPointsState] = useState<string>("1%");

  const { data: workoutExerciseDetails } =
    useExerciseDetailByIdQuery(exerciseDetailsId);

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

  if (!workoutExerciseDetails) return null;
  return (
    <BottomSheetModalProvider>
      <View className="flex-1">
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
        <View className="mx-4 mb-12">
          <ExerciseName exerciseId={workoutExerciseDetails.exercise_id} />
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
        <Sets workoutExerciseDetailsId={exerciseDetailsId} />

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
          <WorkoutSettings handleClosePanel={handleClosePanel} />
        )}
        {/*MARK: Exercise guide */}
        {nameOfModal === "exerciseGuide" && (
          <ExerciseGuide
            handleClosePanel={handleClosePanel}
            exerciseId={workoutExerciseDetails.exercise_id}
          />
        )}
        {/*MARK: One Rep Max */}
        {nameOfModal === "oneRepMax" && (
          <OneRepMax handleClosePanel={handleClosePanel} />
        )}
        {/*MARK: Previous stats */}
        {nameOfModal === "exercisePreviousStats" && (
          <ExercisePreviousStats handleClosePanel={handleClosePanel} />
        )}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ExerciseTracking;
