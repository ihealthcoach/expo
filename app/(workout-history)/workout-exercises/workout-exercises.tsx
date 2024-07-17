import { Image } from "expo-image";
import { View, Text } from "react-native";
import useExerciseStore from "@/store/exercisesStore";
import type { Exercise } from "@/store/exercisesStore";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import Button from "@/components/Button/Button";
import PlusSmallIcon from "@/assets/icons/plus-small-outline";

const WorkoutExercises = () => {
  const exercises = useExerciseStore((state) => state.exercises);
  return (
    <View>
      <View className="mb-6">
        {exercises.map((exercise: Exercise, index: number) => (
          <View
            key={exercise.id}
            className={`flex-row items-center ${index !== exercises.length - 1 ? "mb-[6px]" : ""}`}
          >
            <Image
              className="mr-2 h-[68px] w-[68px]"
              source={{ uri: exercise.gif_path }}
            />
            <View>
              <Text className="font-interSemiBold text-base leading-[20px] text-gray-900">
                {exercise.name}
              </Text>
              <Text className="font-interRegular text-[11px] leading-[13.75px] text-gray-400">
                {exercise.sets_completed} of {exercise.total_sets} sets
                completed
              </Text>
            </View>
            <ChevronRightIcon className="ml-auto" />
          </View>
        ))}
      </View>
      <Button
        onPress={() => console.log("Start workout")}
        text="Start workout"
        bgColor="bg-indigo-600"
      />
      <Button
        onPress={() => console.log("Add exercise")}
        text="Add exercise"
        iconBefore={<PlusSmallIcon stroke={"#374151"} />}
        textColor="text-gray-700"
        bgColor="bg-gray-50"
      />
      {/* TODO: Add bottom navigation */}
    </View>
  );
};

export default WorkoutExercises;
