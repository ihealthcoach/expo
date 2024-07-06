import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import {
  fetchExerciseById,
  fetchExercises,
} from "@/utils/fetchExercises/fetchExercises";
import useAllExerciseQuery from "../useAllExerciseQuery/useAllExerciseQuery";
// import useGifStore from "./gifStore";

const useGetExerciseByIdQuery = (exerciseId: string) => {
  //see if it exists already
  const allExercises = useAllExerciseQuery();
  const localExercise = allExercises?.find((ex) => ex.id === exerciseId);
  if (localExercise) {
    return localExercise;
  }

  const { data, error, isLoading, isPending } = useQuery<Exercise>({
    queryKey: ["exercises", exerciseId],
    queryFn: () => fetchExerciseById(exerciseId),
    staleTime: 1,
    refetchOnMount: false,
  });

  if (isLoading) console.log("Loading exercises...");
  if (error) console.error("Error: " + error.message);
  if (isPending) console.log("It is pending...");

  return data;
};

export default useGetExerciseByIdQuery;
