import {
  useSetByExerciseDetailsQuery,
  useUpdateSetMutation,
} from "@/queries/setQueries/setQueries";
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
import Button from "@/components/Button/Button";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { CustomKeyboardView } from "../CustomKeyboardView/CustomKeyboardView";
import CheckMiniIcon from "@/assets/icons/check-mini";
import { Set } from "@/types/exercise-tracking";
import PlusIcon from "@/assets/icons/plus-mini-20";

type SetsProps = {
  workoutExerciseDetailsId: string;
};

export const Sets = ({ workoutExerciseDetailsId }: SetsProps) => {
  const { data: exerciseSets, refetch } = useSetByExerciseDetailsQuery(
    workoutExerciseDetailsId,
  );
  if (!exerciseSets) return null;
  return (
    <>
      {exerciseSets.map((set, index) => (
        <SetDetailsComponent
          refetchSets={refetch}
          key={set.id}
          set={set}
          totalSets={exerciseSets.length}
          index={index}
        />
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
    </>
  );
};

type SetDetailsComponentProps = {
  set: Set;
  totalSets: number;
  index: number;
  refetchSets: () => void;
};

const SetDetailsComponent = ({
  set,
  totalSets,
  index,
  refetchSets,
}: SetDetailsComponentProps) => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [selectedSet, setSelectedSet] = useState<string>(null);
  const weightInputRef = useRef<TextInput>(null);
  const repsInputRef = useRef<TextInput>(null);
  const { mutate: updateSet } = useUpdateSetMutation();
  const [weightInputValue, setWeightInputValue] = useState<string>("");
  const [repsInputValue, setRepsInputValue] = useState<string>("");

  const handlePress = (setId: string) => {
    setInputVisible(true);
    setSelectedSet(setId);
    setTimeout(() => {
      if (weightInputRef.current) {
        weightInputRef.current.focus();
      }
    }, 100); // Delay to ensure the input is rendered before focusing
  };

  const handleSubmit = () => {
    updateSet({
      id: selectedSet,
      updates: {
        weight: parseInt(weightInputValue),
        reps: parseInt(repsInputValue),
      },
    });
    refetchSets();
    setInputVisible(false);
  };

  return (
    <>
      <CustomKeyboardView
        handleSubmit={handleSubmit}
        weightInputValue={weightInputValue}
        repsInputValue={repsInputValue}
        setWeightInputValue={setWeightInputValue}
        setRepsInputValue={setRepsInputValue}
        isInputVisible={isInputVisible}
        setInputVisible={setInputVisible}
        weightInputRef={weightInputRef}
        repsInputRef={repsInputRef}
      />
      <TouchableOpacity onPress={() => handlePress(set.id)} key={set.id}>
        <View
          key={set.id}
          className={`mx-4 mb-4 flex-row justify-between bg-gray-100 pb-[10px] ${
            index !== totalSets ? "border-b border-gray-200" : ""
          }`}
        >
          <View className="flex w-1/3 items-start justify-between">
            <Text className="font-interMedium text-lg leading-[22.5px] text-gray-900">
              {(index + 1).toString().padStart(2, "0")}
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
                kg
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
    </>
  );
};
