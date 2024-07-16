import { Set } from "@/types/exercise-tracking";
import {
  createSet,
  deleteSet,
  fetchSetByExercise,
  fetchSetById,
  fetchSets,
  updateSet,
} from "@/utils/services/setFunctions/setFunctions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllSetsQuery = () => {
  return useQuery<Set[]>({
    queryKey: ["sets"],
    queryFn: fetchSets,
  });
};

export const useSetByExerciseDetailsQuery = (exerciseDetailsId: string) => {
  return useQuery({
    queryKey: ["setByExercise", exerciseDetailsId],
    queryFn: () => fetchSetByExercise(exerciseDetailsId),
  });
};

export const useSetByIdQuery = (id: string) => {
  return useQuery<Set>({
    queryKey: ["set", id],
    queryFn: () => fetchSetById(id),
  });
};

export const useCreateSetMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSet,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["set", variables.id] });
      queryClient.invalidateQueries({
        queryKey: ["setByExercise", variables.exercise_details_id],
      });

      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });
};

export const useUpdateSetMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; updates: Partial<Set> }) =>
      updateSet(params.id, params.updates),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["set", variables.id] });
      queryClient.invalidateQueries({
        queryKey: ["setByExercise"],
      });
      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });
};

export const useDeleteSetMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });
};
