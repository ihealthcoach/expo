import { useGetExerciseByIdQuery } from "@/queries/exerciseQueries/exerciseQueries";
import { Text } from "react-native-elements";

type ExerciseNameProps = {
  exerciseId: string;
};

export const ExerciseName = ({ exerciseId }: ExerciseNameProps) => {
  const { data: exercise } = useGetExerciseByIdQuery(exerciseId);
  if (!exercise) return null;
  return (
    <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
      {exercise.name}
    </Text>
  );
};
