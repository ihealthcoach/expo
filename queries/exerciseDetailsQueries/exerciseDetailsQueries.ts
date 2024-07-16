import {
  ExerciseDetails,
  ExerciseDetailsWithSets,
} from "@/types/exercise-tracking";
import { fetchExerciseById } from "@/utils/fetchExercises/fetchExercises";
import {
  createExerciseDetail,
  deleteExerciseDetail,
  fetchExerciseDetailById,
  fetchExerciseDetails,
  fetchExercisesByWorkout,
  updateExerciseDetail,
} from "@/utils/services/exerciseDetailsFunctions/exerciseDetailsFunctions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllExerciseDetailsQuery = () => {
  return useQuery<ExerciseDetails[]>({
    queryKey: ["exerciseDetails"],
    queryFn: fetchExerciseDetails,
  });
};

export const useExercisesByWorkoutQuery = (workoutId: string) => {
  return useQuery({
    queryKey: ["exercisesByWorkout", workoutId],
    queryFn: () => fetchExercisesByWorkout(workoutId),
  });
};

export const useExerciseDetailByIdQuery = (id: string) => {
  return useQuery<ExerciseDetails>({
    queryKey: ["exerciseDetail", id],
    queryFn: () => fetchExerciseDetailById(id),
  });
};

export const useCreateExerciseDetailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createExerciseDetail,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["workout", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
};

export const useUpdateExerciseDetailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; updates: Partial<ExerciseDetails> }) =>
      updateExerciseDetail(params.id, params.updates),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["workout", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
};

export const useDeleteExerciseDetailMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteExerciseDetail(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
};
