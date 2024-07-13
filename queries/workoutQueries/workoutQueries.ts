import { Workout } from "@/types/exercise-tracking";
import { fetchExerciseById } from "@/utils/fetchExercises/fetchExercises";
import {
  createWorkout,
  deleteWorkout,
  fetchWorkoutById,
  fetchWorkouts,
  updateWorkout,
} from "@/utils/services/workoutFunctions/workoutFunctions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useAllWorkoutsQuery = () => {
  return useQuery<Workout[]>({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });
};

export const useWorkoutByIdQuery = (id: string) => {
  return useQuery<Workout>({
    queryKey: ["workout", id],
    queryFn: () => fetchWorkoutById(id),
  });
};

export const useCreateWorkoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createWorkout,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workouts"] }),
  });
};

export const useUpdateWorkoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; updates: Partial<Workout> }) =>
      updateWorkout(params.id, params.updates),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workouts"] }),
  });
};

export const useDeleteWorkoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteWorkout,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workouts"] }),
  });
};
