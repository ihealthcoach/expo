import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import {
  fetchExerciseById,
  fetchExercises,
} from "@/utils/fetchExercises/fetchExercises";

const useAllExerciseQuery = () => {
  return useQuery<Exercise[]>({
    queryKey: ["exercises"],
    queryFn: () => fetchExercises(),
  });
};

const useGetExerciseByIdQuery = (exerciseId: string) => {
  const { data: allExercises } = useAllExerciseQuery();
  const localExercise = allExercises?.find((ex) => ex.id === exerciseId);

  return useQuery<Exercise>({
    queryKey: ["exercises", exerciseId],
    queryFn: async () => {
      if (localExercise) {
        return localExercise;
      }
      return await fetchExerciseById(exerciseId);
    },
  });
};

export { useAllExerciseQuery, useGetExerciseByIdQuery };
