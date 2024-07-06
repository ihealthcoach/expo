import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import {
  fetchExerciseById,
  fetchExercises,
} from "@/utils/fetchExercises/fetchExercises";
// import useGifStore from "./gifStore";

const useAllExerciseQuery = () => {
  console.log("in use exercise store");
  const { data, error, isLoading, isPending } = useQuery<Exercise[]>({
    queryKey: ["exercises"],
    queryFn: () => fetchExercises(),
    staleTime: 1,
  });

  if (isLoading) console.log("Loading exercises...");
  if (error) console.error("Error: " + error.message);
  if (isPending) console.log("It is pending...");

  return data;
};

export default useAllExerciseQuery;
