import { useSetByExerciseDetailsQuery } from "@/queries/setQueries/setQueries";
import { Text } from "react-native";

type SetsSummaryProps = {
  workoutExerciseDetailsId: string;
};

const SetsSummary = ({ workoutExerciseDetailsId }: SetsSummaryProps) => {
  const { data: exerciseSets } = useSetByExerciseDetailsQuery(
    workoutExerciseDetailsId,
  );
  if (!exerciseSets) return null;
  const completedSets = exerciseSets.filter((set) => set.completed).length;
  const totalSets = exerciseSets.length;

  return (
    <Text className="font-interRegular text-[11px] leading-[13.75px] text-gray-400">
      {completedSets} of {totalSets} sets completed
    </Text>
  );
};

export default SetsSummary;
