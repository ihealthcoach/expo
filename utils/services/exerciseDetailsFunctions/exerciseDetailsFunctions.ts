import { supabase } from "@/lib/supabase";
import { ExerciseDetails } from "@/types/exercise-tracking";

export const fetchExerciseDetails = async () => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*");
  if (error) throw error;
  return data as ExerciseDetails[];
};

export const fetchExercisesByWorkout = async (workoutId: string) => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*")
    .eq("workout_id", workoutId);

  if (error) throw error;
  return data;
};

export const fetchExerciseDetailById = async (id: string) => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as ExerciseDetails;
};

export const createExerciseDetail = async (exerciseDetail: ExerciseDetails) => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .insert([exerciseDetail])
    .single();
  if (error) throw error;
  return data as ExerciseDetails;
};

export const updateExerciseDetail = async (
  id: string,
  updates: Partial<ExerciseDetails>,
) => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .update(updates)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as ExerciseDetails;
};

export const deleteExerciseDetail = async (id: string) => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as ExerciseDetails;
};

export {};
