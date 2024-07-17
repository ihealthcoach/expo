import { View, Text } from "react-native";
import useExerciseStore from "@/store/exercisesStore";
import type { Exercise } from "@/store/exercisesStore";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import Button from "@/components/Button/Button";
import PlusSmallIcon from "@/assets/icons/plus-small-outline";
import { ExerciseDetails } from "@/types/exercise-tracking";
import { useGetGifByExerciseQuery } from "@/queries/gifQueries/gifQueries";
import { useExercisesByWorkoutQuery } from "@/queries/exerciseDetailsQueries/exerciseDetailsQueries";
import ExerciseName from "@/components/ExerciseName/ExerciseName";
import ExerciseGif from "@/components/ExerciseGif/ExerciseGif";
import { useSetByExerciseDetailsQuery } from "@/queries/setQueries/setQueries";
import SetsSummary from "@/components/SetsSummary/SetsSummary";

type Props = {
  workoutId: string;
};

const WorkoutExercises = ({
  workoutId = "6946350a-61a1-4cd3-a11c-59364684d42b",
}: Props) => {
  const { data: workoutExercises, refetch } =
    useExercisesByWorkoutQuery(workoutId);
  if (!workoutExercises) return null;
  return (
    <>
      <View className="mb-6">
        <Text className="font-interBold text-4xl leading-[54px] text-gray-900">
          Workout
        </Text>
        <Text className="font-interRegular text-sm text-gray-400">
          {workoutExercises.length} exercises added to your workout
        </Text>
      </View>
      <View>
        <View className="mb-6">
          {workoutExercises.map((exercise: ExerciseDetails, index: number) => (
            <ExerciseView
              index={index}
              key={exercise.id}
              totalExercises={workoutExercises.length}
              workoutExerciseDetails={exercise}
            />
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
    </>
  );
};

type ExerciseViewProps = {
  workoutExerciseDetails: ExerciseDetails;
  index: number;
  totalExercises: number;
};
const ExerciseView = ({
  workoutExerciseDetails,
  index,
  totalExercises,
}: ExerciseViewProps) => {
  return (
    <View
      key={workoutExerciseDetails.id}
      className={`flex-row items-center ${index !== totalExercises ? "mb-[6px]" : ""}`}
    >
      <ExerciseGif exerciseId={workoutExerciseDetails.exercise_id} />
      <View>
        <ExerciseName
          classNames="font-interSemiBold text-base leading-[20px]"
          exerciseId={workoutExerciseDetails.exercise_id}
        />
        <SetsSummary workoutExerciseDetailsId={workoutExerciseDetails.id} />
      </View>

      <ChevronRightIcon className="ml-auto" />
    </View>
  );
};

export default WorkoutExercises;
