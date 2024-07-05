import { useQuery } from "@tanstack/react-query";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import {
  fetchExerciseById,
  fetchExercises,
} from "@/utils/fetchExercises/fetchExercises";
// import useGifStore from "./gifStore";

const useExerciseStore = (exerciseId?: string) => {
  if (!exerciseId) {
    console.log("in use exercise store");
    const { data, error, isLoading, isPending } = useQuery<Exercise[]>({
      queryKey: ["exercises"],
      queryFn: () => fetchExercises(),
      staleTime: 1,
      refetchOnMount: false,
    });

    if (isLoading) console.log("Loading exercises...");
    if (error) console.error("Error: " + error.message);
    if (isPending) console.log("It is pending...");

    return data;
  } else {
    //see if it exists in the useQueryFunction

    const { data, error, isLoading, isPending } = useQuery<Exercise>({
      queryKey: exerciseId ? ["exercises", exerciseId] : ["exercises"],
      queryFn: () => fetchExerciseById(exerciseId),
      staleTime: 1,
      refetchOnMount: false,
    });

    if (isLoading) console.log("Loading exercises...");
    if (error) console.error("Error: " + error.message);
    if (isPending) console.log("It is pending...");

    return data;
  }
};

export default useExerciseStore;
