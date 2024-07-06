import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import { fetchGifByExercise, fetchGifs } from "@/utils/fetchGifs/fetchGifs";
import useAllExerciseQuery from "../useAllExerciseQuery/useAllExerciseQuery";
import useAllGifsQuery from "../useAllGifsQuery/useAllGifsQuery";
import useGetExerciseByIdQuery from "../useGetExerciseByIdQuery/useGetExerciseByIdQuery";

// import useGifStore from "./gifStore";

const useGetGifByExerciseQuery = (exerciseId: string) => {
  console.log("in use gif query");

  const gifs = useAllGifsQuery();
  console.log("🚀 ~ useGetGifByExerciseQuery ~ gifs:", gifs);
  if (gifs && gifs[exerciseId]) {
    return gifs[exerciseId];
  }

  const exercise = useGetExerciseByIdQuery(exerciseId);
  console.log("🚀 ~ useGetGifByExerciseQuery ~ exercise:", exercise);

  const { data, error, isLoading, isPending } = useQuery<string>({
    queryKey: ["gif"],
    queryFn: async () => await fetchGifByExercise(exercise),
    refetchOnMount: false,
    enabled: !!exercise,
  });
  console.log("getting gif by id" + data);

  if (isLoading) console.log("Loading gifs...");
  if (error) console.error("Error: " + error.message);
  if (isPending) console.log("It is pending...");

  return data;
};

export default useGetGifByExerciseQuery;
