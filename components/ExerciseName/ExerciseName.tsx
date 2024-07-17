import { useGetExerciseByIdQuery } from "@/queries/exerciseQueries/exerciseQueries";
import { Text } from "react-native";
type ExerciseNameProps = {
  exerciseId: string;
  classNames?: string;
};

const ExerciseName = ({ exerciseId, classNames = "" }: ExerciseNameProps) => {
  const { data: exercise } = useGetExerciseByIdQuery(exerciseId);
  if (!exercise) return null;

  return <Text className={`text-gray-900 ${classNames}`}>{exercise.name}</Text>;
};

export default ExerciseName;
