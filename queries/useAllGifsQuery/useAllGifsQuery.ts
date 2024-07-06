import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import { fetchGifs } from "@/utils/fetchGifs/fetchGifs";
import useAllExerciseQuery from "../useAllExerciseQuery/useAllExerciseQuery";

// import useGifStore from "./gifStore";

const useAllGifsQuery = () => {
  console.log("in use gif query");

  const allExercises = useAllExerciseQuery();

  const { data, error, isLoading, isPending } = useQuery<
    Record<string, string>
  >({
    queryKey: ["gif"],
    queryFn: async () => await fetchGifs(allExercises),
    refetchOnMount: false,
    enabled: !!allExercises,
  });

  if (isLoading) console.log("Loading gifs...");
  if (error) console.error("Error: " + error.message);
  if (isPending) console.log("It is pending...");

  return data;
};

export default useAllGifsQuery;
