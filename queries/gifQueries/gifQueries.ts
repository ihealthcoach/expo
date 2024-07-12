import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import { fetchGifByExercise, fetchGifs } from "@/utils/fetchGifs/fetchGifs";
import {
  useAllExerciseQuery,
  useGetExerciseByIdQuery,
} from "../exerciseQueries/exerciseQueries";

const useAllGifsQuery = () => {
  const { data: allExercises } = useAllExerciseQuery();

  return useQuery<Record<string, string>>({
    queryKey: ["gifs"],
    queryFn: async () => await fetchGifs(allExercises),
    enabled: !!allExercises,
  });
};

const useGetGifByExerciseQuery = (exerciseId: string) => {
  const { data: gifs } = useAllGifsQuery();
  const { data: exercise } = useGetExerciseByIdQuery(exerciseId);

  return useQuery<string>({
    queryKey: ["gif", exerciseId],
    queryFn: async () => {
      if (gifs && gifs[exerciseId]) {
        return gifs[exerciseId];
      }
      return await fetchGifByExercise(exercise);
    },
    enabled: !!exercise,
  });
};

export { useAllGifsQuery, useGetGifByExerciseQuery };
